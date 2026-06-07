"use client";

import { useState } from "react";

type SyntaxRevealProps = {
  exampleSyntax: string;
  answerSyntax: string;
};

type RevealMode = "example" | "answer";

export function SyntaxReveal({
  exampleSyntax,
  answerSyntax,
}: SyntaxRevealProps) {
  const [mode, setMode] = useState<RevealMode | null>(null);
  const activeSyntax =
    mode === "example" ? exampleSyntax : mode === "answer" ? answerSyntax : "";

  return (
    <div className="mt-5 rounded-md border border-slate-200 bg-slate-950 p-4 text-slate-50">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-200">
          Syntax help
        </p>
        <div className="flex flex-wrap gap-2">
          <RevealButton
            active={mode === "example"}
            label="Example"
            onClick={() => setMode("example")}
          />
          <RevealButton
            active={mode === "answer"}
            label="Answer"
            onClick={() => setMode("answer")}
          />
        </div>
      </div>

      {mode ? (
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md border border-white/10 bg-white/[0.04] p-3 font-mono text-sm leading-6">
          <code>{activeSyntax}</code>
        </pre>
      ) : (
        <p className="mt-4 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300">
          Choose Example for a similar syntax pattern, or Answer for the exact
          syntax needed to complete this lesson.
        </p>
      )}
    </div>
  );
}

function RevealButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-pressed={active}
      className={[
        "h-9 rounded-md border px-3 text-sm font-semibold transition",
        active
          ? "border-teal-200 bg-teal-200 text-slate-950"
          : "border-white/15 bg-white/[0.06] text-slate-100 hover:bg-white/[0.12]",
      ].join(" ")}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
