import type { ReactNode } from "react";
import type { Lesson } from "@/lib/lessons";
import { getLessonCompletion, getLessonSyntaxExample } from "@/lib/lessons";
import { SyntaxReveal } from "@/components/SyntaxReveal";

type LessonViewProps = {
  lesson: Lesson;
};

export function LessonView({ lesson }: LessonViewProps) {
  const isComplete = getLessonCompletion(lesson);

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
              Lesson {lesson.number}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              {lesson.title}
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {lesson.goal}
            </p>
          </div>
          <StatusPill complete={isComplete} />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Open this file
            </p>
            <code className="mt-2 block overflow-x-auto rounded-md bg-slate-950 p-3 font-mono text-sm text-slate-50">
              {lesson.file}
            </code>
          </div>

          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              How it works
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {lesson.explanation}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-md border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-950">
            What to change
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 md:grid-cols-2">
            {lesson.tasks.map((task) => (
              <li key={task} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                <span>{task}</span>
              </li>
            ))}
          </ul>

          <SyntaxReveal
            answerSyntax={lesson.answerSyntax}
            exampleSyntax={getLessonSyntaxExample(lesson)}
          />
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">
              Live result
            </h2>
            <p className="mt-1 text-sm text-slate-500">{lesson.successText}</p>
          </div>
          <StatusPill complete={isComplete} />
        </div>

        <div className="mt-5">
          {isComplete ? (
            <SuccessfulResult>{lesson.render()}</SuccessfulResult>
          ) : (
            <ResultError lesson={lesson} />
          )}
        </div>
      </section>
    </div>
  );
}

function ResultError({ lesson }: { lesson: Lesson }) {
  return (
    <div className="rounded-md border border-rose-200 bg-rose-50 p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-rose-900">
            Error loading result
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-rose-800">
            The lesson result is blocked because the referenced exercise file
            does not satisfy the requirements yet. Fix the referenced file, then
            return to this page and the live result will load automatically.
          </p>
        </div>
        <span className="inline-flex h-8 w-fit items-center rounded-md border border-rose-200 bg-white px-3 text-xs font-semibold uppercase tracking-[0.12em] text-rose-800">
          Failed check
        </span>
      </div>

      <div className="mt-4 rounded-md border border-rose-200 bg-white p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-rose-500">
          Waiting on
        </p>
        <code className="mt-2 block overflow-x-auto font-mono text-sm text-rose-950">
          {lesson.file}
        </code>
      </div>
    </div>
  );
}

function SuccessfulResult({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="rounded-md border border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-semibold text-emerald-900">
          Result loaded successfully
        </p>
        <p className="mt-1 text-sm leading-6 text-emerald-800">
          The exercise file now matches the lesson requirements.
        </p>
      </div>
      {children}
    </div>
  );
}

function StatusPill({ complete }: { complete: boolean }) {
  return (
    <div
      className={[
        "inline-flex h-9 w-fit items-center gap-2 rounded-md border px-3 text-sm font-semibold",
        complete
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-amber-200 bg-amber-50 text-amber-800",
      ].join(" ")}
    >
      <span
        className={[
          "h-2 w-2 rounded-full",
          complete ? "bg-emerald-500" : "bg-amber-500",
        ].join(" ")}
      />
      {complete ? "Successful" : "Needs work"}
    </div>
  );
}
