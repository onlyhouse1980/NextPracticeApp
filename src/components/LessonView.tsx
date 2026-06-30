import type { ReactNode } from "react";
import type { Lesson } from "@/lib/lessons";
import { getLessonCompletion, getLessonSyntaxExample } from "@/lib/lessons";
import { ExerciseEditor } from "@/components/ExerciseEditor";
import { SyntaxReveal } from "@/components/SyntaxReveal";

type LessonViewProps = {
  lesson: Lesson;
  initialSource: string;
};

export function LessonView({ lesson, initialSource }: LessonViewProps) {
  const isComplete = getLessonCompletion(lesson);

  return (
    <div className="space-y-6">
      <section
        aria-labelledby="lesson-title"
        className="workspace-reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        data-depth="4"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
              Lesson {lesson.number}
            </p>
            <h1
              className="text-mask-reveal mt-2 text-3xl font-semibold tracking-tight text-slate-950"
              id="lesson-title"
            >
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
              Editing in this lesson
            </p>
            <code className="mt-2 block overflow-x-auto rounded-md bg-slate-950 p-3 font-mono text-sm text-slate-50">
              {lesson.file}
            </code>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              The editor below writes directly to this local file.
            </p>
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

      <section
        aria-labelledby="workspace-title"
        className="scene lesson-workspace relative isolate overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950 p-4 shadow-2xl shadow-slate-300/40 sm:p-6 lg:p-8"
        data-scene="code-workspace"
      >
        <div
          aria-hidden="true"
          className="workspace-grid-layer absolute inset-0 -z-30"
          data-depth="0"
        />
        <div
          aria-hidden="true"
          className="workspace-glow-layer absolute -left-24 top-1/4 -z-20 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl"
          data-depth="1"
        />
        <div
          aria-hidden="true"
          className="workspace-orbit-layer absolute -right-20 top-8 -z-10 h-56 w-56 rounded-full border border-teal-300/10"
          data-depth="2"
        />

        <div className="relative z-10">
          <div
            className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
            data-depth="4"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                Local code workspace
              </p>
              <h2
                className="text-mask-reveal mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                id="workspace-title"
              >
                Edit, save, and verify without leaving the lesson
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Your code stays on this machine. A valid save updates the real
                exercise file and lets the running dev server rebuild the result.
              </p>
            </div>
            <div
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-300"
              data-depth="5"
            >
              <span
                aria-hidden="true"
                className="status-pulse h-2 w-2 rounded-full bg-teal-300"
              />
              Fast Refresh connected
            </div>
          </div>

          <div className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.75fr)] xl:items-start">
            <ExerciseEditor
              key={initialSource}
              file={lesson.file}
              initialSource={initialSource}
            />

            <div
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-950/20 xl:sticky xl:top-6"
              data-depth="4"
            >
              <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Live result
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-950">
                    Lesson check
                  </h3>
                </div>
                <StatusPill complete={isComplete} />
              </div>

              <div className="p-5">
                <p className="mb-4 text-sm leading-6 text-slate-500">
                  {lesson.successText}
                </p>
                {isComplete ? (
                  <SuccessfulResult>{lesson.render()}</SuccessfulResult>
                ) : (
                  <ResultError lesson={lesson} />
                )}
              </div>
            </div>
          </div>
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
            does not satisfy the requirements yet. Update the code in the
            embedded editor and choose Save &amp; run.
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
          The saved exercise file matches the lesson requirements.
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
