# Next Practice

Next Practice is a local Next.js 16 practice app designed to be distributed as
a zip package. Learners unzip it, install dependencies, run the dev server, and
fix one focused exercise file per lesson in an editor embedded in the website.

## Getting Started

Download the latest release zip file.

After unzipping the package, install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How the Lessons Work

1. Read the main page for the workflow.
2. Open a lesson from the left sidebar.
3. Read the top section for the goal, explanation, and referenced file path.
4. Edit the real exercise file in the embedded code workspace.
5. Fix only the requested behavior, then choose `Save & run` or press
   `Ctrl/Command + S`.
6. The app validates the TypeScript before writing to disk. A valid save triggers
   the dev server, and the adjacent result switches to `Successful` when the
   behavior is correct.

The exercise files compile in their initial state, but their behavior is
intentionally wrong or incomplete. This keeps the dev server usable while giving
each lesson a real fix to make. The embedded editor writes to `src/exercises`
inside the local project, so changes remain available in any external editor too.

## Lesson Files

All exercise files live in `src/exercises`.

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
