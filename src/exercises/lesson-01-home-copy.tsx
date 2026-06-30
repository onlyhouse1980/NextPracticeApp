import type { JSX } from "react";

// TODO: Complete this content object to match the expected homepage copy.
export const homeIntroContent = {
  headline: "Build the habit of fixing real Next.js files",
  summary: "Open a lesson, edit its code in the embedded workspace, and save to verify the result.",
  cta: "Start Lesson 1",
};

export function HomeIntro(): JSX.Element {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-lg font-semibold text-slate-900">
        {homeIntroContent.headline}
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        {homeIntroContent.summary}
      </p>
      <button className="mt-4 rounded bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white">
        {homeIntroContent.cta}
      </button>
    </div>
  );
}
