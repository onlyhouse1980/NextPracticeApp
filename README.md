# Next Practice

Next Practice is a local-first Next.js 16 training app for practicing App
Router concepts by fixing real project files. It is built to be distributed as a
zip package: learners download it, install dependencies, run the dev server, and
complete one focused exercise per lesson inside the browser.

The current app is not a static tutorial. Each lesson reads an actual source
file from `src/exercises`, displays it in an embedded editor, validates the
edited code with the TypeScript compiler, writes valid changes back to disk, and
refreshes the adjacent live result.

## What the App Includes

- A public landing page at `/` with a release/download-oriented overview.
- A local dashboard at `/dashboard` that explains the practice workflow.
- Dynamic lesson pages at `/lessons/[slug]`.
- A persistent lesson sidebar with completion state for all 40 exercises.
- An embedded code editor with line numbers, dirty state, `Tab` insertion,
  unsaved-change protection, and `Ctrl/Command + S` save support.
- A live result panel that switches between `Needs work` and `Successful` based
  on the lesson's validation function.
- A guarded API route for writing only approved exercise files under
  `src/exercises`.

## Tech Stack

- Next.js `16.2.7` with the App Router.
- React `19.2.4`.
- TypeScript `^5` with strict project settings.
- Tailwind CSS `^4` through `@tailwindcss/postcss`.
- Node.js route handlers for local filesystem access.
- TypeScript compiler APIs for syntax, export-contract, and type validation.
- ESLint `^9` with `eslint-config-next` core web vitals and TypeScript rules.
- Google Geist fonts through `next/font`.

## Runtime Architecture

```text
src/app
  page.tsx                         Public landing page
  dashboard/page.tsx               Local learner workflow page
  lessons/[slug]/page.tsx          Dynamic lesson route
  api/exercise-source/route.ts     File-save API for the embedded editor

src/components
  AppShell.tsx                     Sidebar and page shell
  LessonView.tsx                   Lesson instructions, editor, live result
  ExerciseEditor.tsx               Client-side code editor and save flow
  SyntaxReveal.tsx                 Optional syntax guidance

src/lib
  lessons.tsx                      Lesson registry, checks, examples, renders
  exercise-source.ts               Filesystem reads/writes and validation

src/exercises
  lesson-*.ts / lesson-*.tsx       Editable exercise source files
```

Lesson pages are dynamic because they read the latest exercise file from disk on
each request. `generateStaticParams` still exposes the known lesson slugs, while
`dynamic = "force-dynamic"` keeps the local editor and live result aligned with
the current file contents.

## Save and Validation Flow

1. The learner edits the lesson's real file in the embedded editor.
2. `ExerciseEditor` sends a `PUT` request to `/api/exercise-source` with the
   target file and source text.
3. The API route rejects cross-origin writes and accepts only JSON payloads with
   string `file` and `source` fields.
4. `saveExerciseSource` allows edits only to paths matching
   `src/exercises/lesson-XX-name.ts` or `.tsx`.
5. The app blocks oversized files over 128 KB.
6. The TypeScript compiler checks syntax before anything is written.
7. The app compares named exports from the current file and the edited file so
   learners cannot remove the module contract required by the lesson registry.
8. A scoped TypeScript program checks the edited exercise file together with
   `src/lib/lessons.tsx`.
9. Valid source is written through a temporary file and atomic rename.
10. The client refreshes the route so the live result re-renders against the
    updated exercise module.

## Lesson Model

Each lesson is registered in `src/lib/lessons.tsx` with:

- lesson number and slug
- title, goal, explanation, and task list
- editable file path
- syntax guidance
- success text
- a render function for the live result
- an `isComplete` function that validates the learner's implementation

The starter exercise files compile, but each one intentionally contains
incorrect or incomplete behavior. This keeps the development server usable while
still requiring a real code fix.

## Getting Started

Download the latest release zip file, unzip it, and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Learner Workflow

1. Read the dashboard or landing page for the workflow.
2. Open a lesson from the sidebar.
3. Review the goal, explanation, task list, and referenced file path.
4. Edit the real exercise file in the embedded code workspace.
5. Save with `Save & run` or `Ctrl/Command + S`.
6. Fix any syntax or TypeScript diagnostics shown by the editor.
7. Watch the live result switch to `Successful` when the behavior matches the
   lesson requirements.

Edits are written to the local project, so the same changes are available in an
external editor.

## Lesson Files

All editable exercise files live in `src/exercises`.

- `lesson-01-home-copy.tsx`
- `lesson-02-metadata.ts`
- `lesson-03-loading-state.tsx`
- `lesson-04-active-link.ts`
- `lesson-05-image-props.ts`
- `lesson-06-cache-policy.ts`
- `lesson-07-status-class.ts`
- `lesson-08-dynamic-params.ts`
- `lesson-09-link-prefetch.ts`
- `lesson-10-viewport-config.ts`
- `lesson-11-route-title.ts`
- `lesson-12-navigation.ts`
- `lesson-13-status-resolver.ts`
- `lesson-14-feature-list.tsx`
- `lesson-15-posts.ts`
- `lesson-16-user-card.tsx`
- `lesson-17-query-builder.ts`
- `lesson-18-search-params.ts`
- `lesson-19-pagination.ts`
- `lesson-20-json-parser.ts`
- `lesson-21-empty-state.tsx`
- `lesson-22-form-data.ts`
- `lesson-23-form-validation.ts`
- `lesson-24-suspense-card.tsx`
- `lesson-25-cache-tags.ts`
- `lesson-26-opengraph-meta.ts`
- `lesson-27-static-params.ts`
- `lesson-28-role-redirect.ts`
- `lesson-29-catch-all.ts`
- `lesson-30-route-response.ts`
- `lesson-31-cors-headers.ts`
- `lesson-32-cookies.ts`
- `lesson-33-custom-headers.ts`
- `lesson-34-server-action.ts`
- `lesson-35-action-errors.ts`
- `lesson-36-optimistic-reducer.ts`
- `lesson-37-middleware-paths.ts`
- `lesson-38-clsx-merger.ts`
- `lesson-39-error-mapper.ts`
- `lesson-40-jwt-decoder.ts`

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
npm run check
```

`npm run check` runs linting and a production build.
