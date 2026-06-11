"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { lessons } from "@/lib/lessons";

export default function LandingPage() {
  // Mock Editor Toggling state for the interactive hero demo
  const [isFixed, setIsFixed] = useState(false);

  // Lesson Explorer states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"all" | "easy" | "medium" | "difficult">("all");
  const [activeLessonNumber, setActiveLessonNumber] = useState<number>(1);

  // Group lessons by difficulty or determine difficulty based on lesson numbers
  const getDifficulty = (num: number): "easy" | "medium" | "difficult" => {
    if (num <= 13) return "easy";
    if (num <= 27) return "medium";
    return "difficult";
  };

  // Filter lessons
  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const difficulty = getDifficulty(lesson.number);
      const matchesDifficulty = selectedDifficulty === "all" || difficulty === selectedDifficulty;

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        lesson.title.toLowerCase().includes(query) ||
        lesson.goal.toLowerCase().includes(query) ||
        lesson.explanation.toLowerCase().includes(query) ||
        lesson.file.toLowerCase().includes(query);

      return matchesDifficulty && matchesSearch;
    });
  }, [searchQuery, selectedDifficulty]);

  const activeLesson = useMemo(() => {
    return lessons.find((l) => l.number === activeLessonNumber) || lessons[0];
  }, [activeLessonNumber]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-teal-500/20">
              N
            </div>
            <div>
              <span className="block text-base font-semibold tracking-tight text-white leading-tight">
                Next Practice
              </span>
              <span className="block text-xs text-slate-400">
                Local App Router Mastery
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/onlyhouse1980/NextPracticeApp"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://github.com/onlyhouse1980/NextPracticeApp/releases/latest/download/NextPracticeApp-release.zip"
              className="inline-flex h-9 items-center justify-center rounded-md bg-teal-500 px-4 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 hover:scale-105 active:scale-95 shadow-md shadow-teal-500/10"
            >
              Download Release
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/5 px-3 py-1 text-xs font-medium text-teal-400">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                Updated for Next.js 16
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Master the App Router by{" "}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Fixing Real Files
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A localized learning sandbox featuring 40 practical coding exercises.
                Extract searchParams, handle cookies, write server actions, build middleware paths,
                and debug hydration issues directly in your favorite IDE.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/onlyhouse1980/NextPracticeApp/releases/latest/download/NextPracticeApp-release.zip"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-500 px-6 font-semibold text-slate-950 transition hover:bg-teal-400 hover:scale-105 shadow-xl shadow-teal-500/20"
                >
                  Download Latest Release (ZIP)
                </a>
                <Link
                  href="/dashboard"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 px-6 font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-white"
                >
                  Launch App Dashboard
                </Link>
              </div>

              <p className="text-xs text-slate-500">
                Offline-friendly. Learners download the ZIP, install packages, and verify solutions locally.
              </p>
            </div>

            {/* Right Column (Interactive Demo Sandbox UI) */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl shadow-slate-950/50">

                {/* Simulated Window Top Bar */}
                <div className="border-b border-slate-800 bg-slate-950 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-500">
                      lesson-01-home-copy.tsx
                    </span>
                  </div>
                  <button
                    onClick={() => setIsFixed(!isFixed)}
                    className="rounded-md bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400 hover:bg-teal-500/20 transition"
                  >
                    {isFixed ? "Reset Code" : "Fix Code File"}
                  </button>
                </div>

                {/* Simulated IDE / Editor */}
                <div className="p-4 bg-slate-900 border-b border-slate-800 font-mono text-xs overflow-x-auto h-48 select-none text-left">
                  <div className="text-slate-500">{"// TODO: Complete this content object to match the expected homepage copy."}</div>
                  <div className="text-purple-400 mt-1">{"export const "}
                    <span className="text-blue-400">homeIntroContent</span>
                    <span className="text-slate-300">{" = {"}</span>
                  </div>

                  {isFixed ? (
                    <div className="pl-4 transition-all duration-300">
                      <span className="text-teal-400">+</span> <span className="text-blue-300">headline: </span>
                      <span className="text-emerald-300">{'"Build the habit of fixing real Next.js files"'}</span>
                      <span className="text-slate-300">,</span>
                      <br />
                      <span className="text-teal-400">+</span> <span className="text-blue-300">summary: </span>
                      <span className="text-emerald-300">{'"Open a lesson, edit the referenced file, and return to the browser to verify the result."'}</span>
                      <span className="text-slate-300">,</span>
                      <br />
                      <span className="text-teal-400">+</span> <span className="text-blue-300">cta: </span>
                      <span className="text-emerald-300">{'"Start Lesson 1"'}</span>
                      <span className="text-slate-300">,</span>
                    </div>
                  ) : (
                    <div className="pl-4 transition-all duration-300">
                      <span className="text-rose-400">-</span> <span className="text-blue-300">headline: </span>
                      <span className="text-amber-300">{'"Replace this with the correct headline"'}</span>
                      <span className="text-slate-300">,</span>
                      <br />
                      <span className="text-rose-400">-</span> <span className="text-blue-300">summary: </span>
                      <span className="text-amber-300">{'"Replace this with the correct summary"'}</span>
                      <span className="text-slate-300">,</span>
                      <br />
                      <span className="text-rose-400">-</span> <span className="text-blue-300">cta: </span>
                      <span className="text-amber-300">{'"Replace this with the correct CTA"'}</span>
                      <span className="text-slate-300">,</span>
                    </div>
                  )}
                  <div className="text-slate-300">{"};"}</div>
                </div>

                {/* Simulated Local Browser View */}
                <div className="bg-slate-950 p-4">
                  <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h4 className="text-sm font-semibold text-white">Live Browser Preview</h4>
                        <p className="text-xs text-slate-400">Refreshes automatically upon save</p>
                      </div>

                      {isFixed ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 animate-pulse">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Successful
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 px-2.5 py-0.5 text-xs font-semibold text-rose-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                          Needs work
                        </span>
                      )}
                    </div>

                    {/* Preview Area */}
                    <div className="mt-4">
                      {isFixed ? (
                        <div className="space-y-2 text-left">
                          <div className="rounded-md border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-emerald-400">
                            <strong>Success!</strong> The file matches requirements.
                          </div>
                          <div className="rounded border border-slate-800 p-3 bg-slate-950">
                            <h5 className="text-sm font-bold text-white">Build the habit of fixing real Next.js files</h5>
                            <p className="text-xs text-slate-400 mt-1">Open a lesson, edit the referenced file, and return to the browser to verify the result.</p>
                            <button className="mt-3 rounded bg-teal-500 px-3 py-1.5 text-xs font-semibold text-slate-950">Start Lesson 1</button>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-md border border-rose-500/20 bg-rose-500/5 p-4 text-left">
                          <p className="text-xs font-semibold text-rose-400">Error loading result</p>
                          <p className="text-xs text-rose-300/80 mt-1">
                            The homepage copy does not match. Check headline, summary, and CTA variables in your editor.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works (Steps) */}
      <section className="py-20 lg:py-28 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Learning in 3 Simple Steps
            </h2>
            <p className="text-slate-400">
              No databases, cloud services, or accounts to configure. Just pure local developer workflows.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 relative">
              <span className="absolute -top-4 left-6 h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-teal-500/20 text-sm">
                1
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">Download & Unzip</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Grab the latest `NextPracticeApp-release.zip` package from GitHub and extract it onto your machine.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-md bg-slate-950 p-3 text-xs font-mono text-slate-300 text-left">
                <code>unzip NextPracticeApp.zip</code>
              </pre>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 relative">
              <span className="absolute -top-4 left-6 h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-teal-500/20 text-sm">
                2
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">Boot the Dev Server</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Install dependencies and boot up the Next.js development server locally. Open it in your browser.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-md bg-slate-950 p-3 text-xs font-mono text-slate-300 text-left">
                <code>npm install{"\n"}npm run dev</code>
              </pre>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 relative">
              <span className="absolute -top-4 left-6 h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-teal-500/20 text-sm">
                3
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">Fix Code Files</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Open referenced files (e.g. `lesson-04-active-link.ts`) in your IDE. Fix the logic, save, and verify.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-md bg-slate-950 p-3 text-xs font-mono text-slate-300 text-left">
                <code>{"// Return expected styles...\nreturn isOk ? 'btn' : 'btn-err';"}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Catalog Explorer */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Interactive Syllabus
              </h2>
              <p className="text-slate-400">
                Explore our full set of 40 lessons organized from easy to difficult.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap gap-3">
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none w-full sm:w-64"
              />

              <div className="flex rounded-lg border border-slate-800 bg-slate-900 p-1">
                {(["all", "easy", "medium", "difficult"] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`rounded-md px-3 py-1 text-xs font-semibold capitalize transition ${selectedDifficulty === diff
                        ? "bg-teal-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Catalog Layout */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1.8fr]">

            {/* List side */}
            <div className="border border-slate-800 rounded-xl bg-slate-900/50 max-h-[500px] overflow-y-auto divide-y divide-slate-800 text-left">
              {filteredLessons.length === 0 ? (
                <div className="p-8 text-center text-slate-500">No lessons match your search constraints.</div>
              ) : (
                filteredLessons.map((lesson) => {
                  const isActive = lesson.number === activeLessonNumber;
                  const difficulty = getDifficulty(lesson.number);
                  const diffColor =
                    difficulty === "easy"
                      ? "text-emerald-400 bg-emerald-500/5 border-emerald-500/20"
                      : difficulty === "medium"
                        ? "text-amber-400 bg-amber-500/5 border-amber-500/20"
                        : "text-rose-400 bg-rose-500/5 border-rose-500/20";

                  return (
                    <button
                      key={lesson.slug}
                      onClick={() => setActiveLessonNumber(lesson.number)}
                      className={`w-full flex items-start gap-4 p-4 text-left transition ${isActive ? "bg-slate-900" : "hover:bg-slate-900/30"
                        }`}
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${isActive ? "bg-teal-500 text-slate-950" : "bg-slate-800 text-slate-400"
                        }`}>
                        {lesson.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block font-semibold text-white text-sm sm:text-base leading-tight truncate">
                          {lesson.title}
                        </span>
                        <span className="block text-xs text-slate-400 truncate mt-1">
                          {lesson.file.replace("src/exercises/", "")}
                        </span>
                      </div>
                      <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${diffColor}`}>
                        {difficulty}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Details panel */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between text-left">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                    Lesson {activeLesson.number} Details
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {activeLesson.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                    {activeLesson.goal}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Exercise File Location
                    </span>
                    <code className="mt-2 block font-mono text-xs text-slate-300 break-all">
                      {activeLesson.file}
                    </code>
                  </div>

                  <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Validation Rule
                    </span>
                    <p className="mt-2 text-xs text-slate-400 leading-normal">
                      {activeLesson.successText}
                    </p>
                  </div>
                </div>

                {/* Subtasks */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Required Changes
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2 text-xs text-slate-400">
                    {activeLesson.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Syntax example */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Correct Syntax Model
                  </h4>
                  <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4 text-xs font-mono text-teal-300">
                    <code>{activeLesson.answerSyntax}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Topic difficulty: <strong className="capitalize text-slate-400">{getDifficulty(activeLesson.number)}</strong>
                </span>
                <Link
                  href={`/lessons/${activeLesson.slug}`}
                  className="inline-flex h-9 items-center justify-center rounded-md border border-slate-800 bg-slate-950 px-4 text-xs font-semibold text-teal-400 hover:bg-slate-900 transition"
                >
                  Solve Lesson in App
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-900 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-20" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Start Coding Better Next.js Applications
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Ready to upgrade your React and Next.js skills?
            Download the practice bundle, fix the errors, and build real confidence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/onlyhouse1980/NextPracticeApp/releases/latest/download/NextPracticeApp-release.zip"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-500 px-8 font-semibold text-slate-950 transition hover:bg-teal-400 hover:scale-105 shadow-xl shadow-teal-500/20"
            >
              Download NextPracticeApp ZIP
            </a>
            <a
              href="https://github.com/onlyhouse1980/NextPracticeApp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 px-8 font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-500 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs">
              N
            </div>
            <span>© 2026 Next Practice App. Open-source under MIT.</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/onlyhouse1980/NextPracticeApp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition"
            >
              Repository
            </a>
            <a
              href="https://github.com/onlyhouse1980/NextPracticeApp/releases"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition"
            >
              Releases
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
