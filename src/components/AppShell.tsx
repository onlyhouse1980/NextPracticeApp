import Link from "next/link";
import type { ReactNode } from "react";
import { getLessonCompletion, lessons } from "@/lib/lessons";

type AppShellProps = {
  children: ReactNode;
  currentSlug?: string;
};

export function AppShell({ children, currentSlug }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[1520px] flex-col lg:flex-row">
        <aside className="border-b border-slate-200 bg-white/95 px-4 py-4 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-5">
          <Link href="/dashboard" className="block rounded-md px-2 py-2">
            <span className="block text-xl font-semibold tracking-tight text-slate-950">
              Next Practice
            </span>
            <span className="mt-1 block text-sm text-slate-500">
              40 local Next.js 16 exercises
            </span>
          </Link>

          <nav
            aria-label="Lessons"
            className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0"
          >
            {lessons.map((lesson) => {
              const isActive = lesson.slug === currentSlug;
              const isComplete = getLessonCompletion(lesson);

              return (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "flex min-w-[220px] items-center gap-3 rounded-md border px-3 py-3 text-left transition lg:min-w-0",
                    isActive
                      ? "border-teal-300 bg-teal-50 text-teal-950"
                      : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
                      isActive
                        ? "bg-teal-700 text-white"
                        : "bg-slate-100 text-slate-700",
                    ].join(" ")}
                  >
                    {lesson.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">
                      {lesson.title}
                    </span>
                    <span
                      className={[
                        "mt-1 block text-xs",
                        isComplete ? "text-emerald-700" : "text-amber-700",
                      ].join(" ")}
                    >
                      {isComplete ? "Successful" : "Needs work"}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
