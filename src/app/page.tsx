import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { lessons } from "@/lib/lessons";

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
              Next.js 16 practice package
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Read a lesson, fix the referenced file, then refresh the result.
            </h1>
            <p className="text-base leading-7 text-slate-600">
              This app is built to be zipped, downloaded, unzipped, installed,
              and run locally. Each lesson points to one exercise file. The file
              already compiles, but one focused behavior is wrong or incomplete.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-sm font-semibold text-teal-700">1</span>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">
              Start the app
            </h2>
            <pre className="mt-3 overflow-x-auto rounded-md bg-slate-950 p-3 text-sm text-slate-50">
              <code>{`npm install\nnpm run dev`}</code>
            </pre>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-sm font-semibold text-teal-700">2</span>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">
              Open a lesson
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use the left sidebar to choose one of the {lessons.length} lessons.
              The top panel explains the goal, the exact file, and the expected
              behavior.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-sm font-semibold text-teal-700">3</span>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">
              Fix and verify
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Edit the referenced file in your IDE, return to the browser, and
              watch the live result switch from an error loading state to
              Successful.
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">
                Begin with lesson 1
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Lessons are ordered from small helper functions to App Router
                concepts like metadata, static params, route handlers, and
                optimistic UI state.
              </p>
            </div>
            <Link
              href={`/lessons/${lessons[0].slug}`}
              className="inline-flex h-11 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Open lessons
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
