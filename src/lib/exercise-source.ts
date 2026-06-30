import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import ts from "typescript";

const EXERCISE_FILE_PATTERN =
  /^src\/exercises\/lesson-\d{2}-[a-z0-9-]+\.(?:ts|tsx)$/;
const MAX_SOURCE_BYTES = 128_000;
const LESSONS_MODULE = path.join(process.cwd(), "src", "lib", "lessons.tsx");

export type SourceDiagnostic = {
  file: string;
  line?: number;
  column?: number;
  message: string;
};

export class ExerciseSourceError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly diagnostics: SourceDiagnostic[] = [],
  ) {
    super(message);
    this.name = "ExerciseSourceError";
  }
}

export async function readExerciseSource(relativePath: string) {
  const absolutePath = resolveExercisePath(relativePath);
  return fs.readFile(absolutePath, "utf8");
}

export async function saveExerciseSource(
  relativePath: string,
  source: string,
) {
  const absolutePath = resolveExercisePath(relativePath);

  if (Buffer.byteLength(source, "utf8") > MAX_SOURCE_BYTES) {
    throw new ExerciseSourceError(
      "The exercise source is larger than the 128 KB editor limit.",
      413,
    );
  }

  const currentSource = await fs.readFile(absolutePath, "utf8");
  const syntaxDiagnostics = getSyntaxDiagnostics(relativePath, source);

  if (syntaxDiagnostics.length > 0) {
    throw new ExerciseSourceError(
      "Fix the syntax errors before saving.",
      422,
      syntaxDiagnostics,
    );
  }

  const missingExports = getMissingExports(
    relativePath,
    currentSource,
    source,
  );

  if (missingExports.length > 0) {
    throw new ExerciseSourceError(
      "Keep the exercise module contract intact before saving.",
      422,
      missingExports.map((exportName) => ({
        file: relativePath,
        message: `Restore the exported "${exportName}" declaration.`,
      })),
    );
  }

  const typeDiagnostics = getTypeDiagnostics(absolutePath, source);

  if (typeDiagnostics.length > 0) {
    throw new ExerciseSourceError(
      "Fix the TypeScript errors before saving.",
      422,
      typeDiagnostics,
    );
  }

  const temporaryPath = path.join(
    path.dirname(absolutePath),
    `.${path.basename(absolutePath)}.${process.pid}.${Date.now()}.tmp`,
  );

  try {
    await fs.writeFile(temporaryPath, source, "utf8");
    await fs.rename(temporaryPath, absolutePath);
  } finally {
    await fs.rm(temporaryPath, { force: true }).catch(() => undefined);
  }

  return {
    bytes: Buffer.byteLength(source, "utf8"),
    savedAt: new Date().toISOString(),
  };
}

function resolveExercisePath(relativePath: string) {
  const normalizedPath = relativePath.replaceAll("\\", "/");

  if (!EXERCISE_FILE_PATTERN.test(normalizedPath)) {
    throw new ExerciseSourceError("That exercise file is not editable.", 403);
  }

  const projectRoot = process.cwd();
  const exercisesRoot = path.join(projectRoot, "src", "exercises");
  const absolutePath = path.resolve(
    /* turbopackIgnore: true */ projectRoot,
    normalizedPath,
  );

  if (path.dirname(absolutePath) !== exercisesRoot) {
    throw new ExerciseSourceError("That exercise file is not editable.", 403);
  }

  return absolutePath;
}

function getSyntaxDiagnostics(relativePath: string, source: string) {
  const result = ts.transpileModule(source, {
    fileName: relativePath,
    reportDiagnostics: true,
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  });

  return formatDiagnostics(
    (result.diagnostics ?? []).filter(
      (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error,
    ),
  );
}

function getMissingExports(
  relativePath: string,
  currentSource: string,
  nextSource: string,
) {
  const currentExports = collectNamedExports(relativePath, currentSource);
  const nextExports = collectNamedExports(relativePath, nextSource);

  return [...currentExports].filter(
    (exportName) => !nextExports.has(exportName),
  );
}

function collectNamedExports(relativePath: string, source: string) {
  const sourceFile = ts.createSourceFile(
    relativePath,
    source,
    ts.ScriptTarget.Latest,
    true,
    relativePath.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const exports = new Set<string>();

  for (const statement of sourceFile.statements) {
    const hasExportModifier = (
      ts.canHaveModifiers(statement) ? ts.getModifiers(statement) : undefined
    )
      ?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);

    if (ts.isExportDeclaration(statement) && statement.exportClause) {
      if (ts.isNamedExports(statement.exportClause)) {
        for (const element of statement.exportClause.elements) {
          exports.add(element.name.text);
        }
      }
      continue;
    }

    if (!hasExportModifier) {
      continue;
    }

    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        collectBindingNames(declaration.name, exports);
      }
      continue;
    }

    if (
      (ts.isFunctionDeclaration(statement) ||
        ts.isClassDeclaration(statement) ||
        ts.isInterfaceDeclaration(statement) ||
        ts.isTypeAliasDeclaration(statement) ||
        ts.isEnumDeclaration(statement)) &&
      statement.name
    ) {
      exports.add(statement.name.text);
    }
  }

  return exports;
}

function collectBindingNames(name: ts.BindingName, names: Set<string>) {
  if (ts.isIdentifier(name)) {
    names.add(name.text);
    return;
  }

  for (const element of name.elements) {
    if (!ts.isOmittedExpression(element)) {
      collectBindingNames(element.name, names);
    }
  }
}

function getTypeDiagnostics(absolutePath: string, source: string) {
  const configPath = path.join(process.cwd(), "tsconfig.json");

  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);

  if (configFile.error) {
    return formatDiagnostics([configFile.error]);
  }

  const parsedConfig = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(configPath),
  );
  const compilerOptions = {
    ...parsedConfig.options,
    incremental: false,
    noEmit: true,
  };
  const host = ts.createCompilerHost(compilerOptions);
  const originalReadFile = host.readFile.bind(host);
  const normalizedTarget = normalizeAbsolutePath(absolutePath);

  host.readFile = (fileName) =>
    normalizeAbsolutePath(fileName) === normalizedTarget
      ? source
      : originalReadFile(fileName);
  host.getSourceFile = (fileName, languageVersion, onError) => {
    const fileSource = host.readFile(fileName);

    if (fileSource === undefined) {
      onError?.(`Unable to read ${fileName}`);
      return undefined;
    }

    return ts.createSourceFile(
      fileName,
      fileSource,
      languageVersion,
      true,
      fileName.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
    );
  };

  const program = ts.createProgram(
    [absolutePath, LESSONS_MODULE],
    compilerOptions,
    host,
  );
  const relevantDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .filter(
      (diagnostic) =>
        diagnostic.category === ts.DiagnosticCategory.Error &&
        (!diagnostic.file ||
          normalizeAbsolutePath(diagnostic.file.fileName) === normalizedTarget ||
          normalizeAbsolutePath(diagnostic.file.fileName) ===
            normalizeAbsolutePath(LESSONS_MODULE)),
    );

  return formatDiagnostics(relevantDiagnostics).slice(0, 8);
}

function formatDiagnostics(
  diagnostics: readonly ts.Diagnostic[],
): SourceDiagnostic[] {
  return diagnostics.map((diagnostic) => {
    const position =
      diagnostic.file && diagnostic.start !== undefined
        ? diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
        : undefined;

    return {
      file: diagnostic.file
        ? path.relative(process.cwd(), diagnostic.file.fileName)
        : "tsconfig.json",
      line: position ? position.line + 1 : undefined,
      column: position ? position.character + 1 : undefined,
      message: ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        "\n",
      ),
    };
  });
}

function normalizeAbsolutePath(filePath: string) {
  const normalized = path.resolve(filePath);
  return ts.sys.useCaseSensitiveFileNames ? normalized : normalized.toLowerCase();
}
