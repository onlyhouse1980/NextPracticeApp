# Next Practice

Next Practice is a local Next.js 16 practice app designed to be distributed as
a zip package. Learners unzip it, install dependencies, run the dev server, and
fix one focused exercise file per lesson.

## Getting Started

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
4. Open that file in your IDE.
5. Fix only the requested behavior.
6. Return to the browser. The lower result section shows an error loading state
   until the file is correct, then switches to `Successful` and loads the actual
   result.

The exercise files compile in their initial state, but their behavior is
intentionally wrong or incomplete. This keeps the dev server usable while giving
each lesson a real fix to make.

## Lesson Files

All exercise files live in `src/exercises`.

- `lesson-01-route-title.ts`
- `lesson-02-home-copy.tsx`
- `lesson-03-navigation.ts`
- `lesson-04-dynamic-params.ts`
- `lesson-05-metadata.ts`
- `lesson-06-posts.ts`
- `lesson-07-user-card.tsx`
- `lesson-08-empty-state.tsx`
- `lesson-09-feature-list.tsx`
- `lesson-10-loading-state.tsx`
- `lesson-11-cache-policy.ts`
- `lesson-12-search-params.ts`
- `lesson-13-form-data.ts`
- `lesson-14-status-class.ts`
- `lesson-15-image-props.ts`
- `lesson-16-route-response.ts`
- `lesson-17-server-action.ts`
- `lesson-18-optimistic-reducer.ts`
- `lesson-19-suspense-card.tsx`
- `lesson-20-static-params.ts`

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
npm run check
```

## Packaging

Before creating a zip for learners, remove generated dependency and build
folders if they exist:

```bash
rm -rf node_modules .next
```

Then zip the project folder. Learners should run `npm install` after unzipping.
