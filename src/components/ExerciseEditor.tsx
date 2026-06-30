"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
  type KeyboardEvent,
  type UIEvent,
} from "react";
import { useRouter } from "next/navigation";

type ExerciseEditorProps = {
  file: string;
  initialSource: string;
};

type SourceDiagnostic = {
  file: string;
  line?: number;
  column?: number;
  message: string;
};

type SaveState = "clean" | "dirty" | "checking" | "saved" | "error";

export function ExerciseEditor({
  file,
  initialSource,
}: ExerciseEditorProps) {
  const router = useRouter();
  const [source, setSource] = useState(initialSource);
  const [savedSource, setSavedSource] = useState(initialSource);
  const [saveState, setSaveState] = useState<SaveState>("clean");
  const [message, setMessage] = useState("All changes are saved locally.");
  const [diagnostics, setDiagnostics] = useState<SourceDiagnostic[]>([]);
  const [isRefreshing, startRefresh] = useTransition();
  const lineNumbersRef = useRef<HTMLPreElement>(null);
  const lineNumbers = useMemo(
    () =>
      Array.from(
        { length: Math.max(source.split("\n").length, 1) },
        (_, index) => index + 1,
      ).join("\n"),
    [source],
  );
  const isDirty = source !== savedSource;
  const isSaving = saveState === "checking";

  useEffect(() => {
    const warnAboutUnsavedChanges = (event: BeforeUnloadEvent) => {
      if (!isDirty) {
        return;
      }

      event.preventDefault();
    };

    window.addEventListener("beforeunload", warnAboutUnsavedChanges);
    return () =>
      window.removeEventListener("beforeunload", warnAboutUnsavedChanges);
  }, [isDirty]);

  async function saveSource() {
    if (!isDirty || isSaving) {
      return;
    }

    setSaveState("checking");
    setMessage("Checking TypeScript before writing to disk…");
    setDiagnostics([]);

    try {
      const response = await fetch("/api/exercise-source", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file, source }),
      });
      const result = (await response.json()) as {
        message?: string;
        diagnostics?: SourceDiagnostic[];
      };

      if (!response.ok) {
        setSaveState("error");
        setMessage(result.message ?? "The file could not be saved.");
        setDiagnostics(result.diagnostics ?? []);
        return;
      }

      setSavedSource(source);
      setSaveState("saved");
      setMessage("Saved. Rebuilding the live result…");

      window.setTimeout(() => {
        startRefresh(() => router.refresh());
      }, 250);
    } catch {
      setSaveState("error");
      setMessage(
        "The dev server did not respond. Keep this tab open and try saving again.",
      );
    }
  }

  function handleSourceChange(nextSource: string) {
    setSource(nextSource);
    setDiagnostics([]);

    if (nextSource === savedSource) {
      setSaveState("clean");
      setMessage("All changes are saved locally.");
    } else {
      setSaveState("dirty");
      setMessage("Unsaved changes");
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      void saveSource();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    event.preventDefault();
    const textarea = event.currentTarget;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const nextSource = `${source.slice(0, start)}  ${source.slice(end)}`;

    handleSourceChange(nextSource);
    requestAnimationFrame(() => {
      textarea.selectionStart = start + 2;
      textarea.selectionEnd = start + 2;
    });
  }

  function syncLineNumbers(event: UIEvent<HTMLTextAreaElement>) {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = event.currentTarget.scrollTop;
    }
  }

  function discardChanges() {
    setSource(savedSource);
    setSaveState("clean");
    setMessage("Unsaved changes discarded.");
    setDiagnostics([]);
  }

  const stateLabel =
    saveState === "checking"
      ? "Checking"
      : saveState === "saved" || isRefreshing
        ? "Rebuilding"
        : saveState === "error"
          ? "Save blocked"
          : isDirty
            ? "Unsaved"
            : "Saved";

  return (
    <div
      className="editor-shell relative min-w-0 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl shadow-slate-950/30"
      data-depth="3"
    >
      <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/90 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-mono text-xs font-medium text-slate-200">
              {file.replace("src/exercises/", "")}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Writes to your local project
            </p>
          </div>
        </div>

        <span
          className={[
            "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
            saveState === "error"
              ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
              : isDirty
                ? "border-amber-300/30 bg-amber-300/10 text-amber-100"
                : "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
          ].join(" ")}
          data-depth="5"
        >
          <span
            className={[
              "h-1.5 w-1.5 rounded-full",
              saveState === "error"
                ? "bg-rose-300"
                : isDirty
                  ? "bg-amber-200"
                  : "bg-emerald-300",
              isSaving || isRefreshing ? "status-pulse" : "",
            ].join(" ")}
          />
          {stateLabel}
        </span>
      </div>

      <div className="relative grid min-h-[26rem] grid-cols-[3.25rem_minmax(0,1fr)] bg-[#080d18]">
        <pre
          ref={lineNumbersRef}
          aria-hidden="true"
          className="editor-line-numbers pointer-events-none overflow-hidden border-r border-slate-800/80 bg-slate-950/70 py-5 pr-3 text-right font-mono text-[13px] leading-6 text-slate-600 select-none"
        >
          {lineNumbers}
        </pre>
        <textarea
          aria-label={`Edit ${file}`}
          autoCapitalize="off"
          autoCorrect="off"
          className="code-editor-textarea min-h-[26rem] w-full resize-y bg-transparent p-5 font-mono text-[13px] leading-6 text-slate-200 outline-none selection:bg-teal-400/30"
          onChange={(event) => handleSourceChange(event.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={syncLineNumbers}
          spellCheck={false}
          value={source}
          wrap="off"
        />
      </div>

      <div className="border-t border-slate-800 bg-slate-900/75 px-4 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div aria-live="polite" className="min-w-0">
            <p
              className={[
                "text-xs font-medium",
                saveState === "error" ? "text-rose-300" : "text-slate-400",
              ].join(" ")}
            >
              {message}
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              Tip: press Ctrl/⌘ + S to save · Tab inserts two spaces
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              className="h-9 rounded-lg border border-slate-700 px-3 text-xs font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!isDirty || isSaving}
              onClick={discardChanges}
              type="button"
            >
              Discard
            </button>
            <button
              className="h-9 rounded-lg bg-teal-400 px-4 text-xs font-bold text-slate-950 shadow-lg shadow-teal-500/15 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none"
              disabled={!isDirty || isSaving}
              onClick={() => void saveSource()}
              type="button"
            >
              {isSaving ? "Checking…" : "Save & run"}
            </button>
          </div>
        </div>

        {diagnostics.length > 0 ? (
          <div
            className="mt-3 rounded-lg border border-rose-400/20 bg-rose-400/[0.07] p-3"
            role="alert"
          >
            <p className="text-xs font-semibold text-rose-200">
              The file on disk was not changed.
            </p>
            <ul className="mt-2 space-y-1.5 font-mono text-[11px] leading-5 text-rose-100/80">
              {diagnostics.map((diagnostic, index) => (
                <li key={`${diagnostic.message}-${index}`}>
                  {diagnostic.file}
                  {diagnostic.line ? `:${diagnostic.line}` : ""}
                  {diagnostic.column ? `:${diagnostic.column}` : ""} —{" "}
                  {diagnostic.message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
