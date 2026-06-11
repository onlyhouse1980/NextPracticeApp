import type { JSX } from "react";

// TODO: Complete this content object to match the expected homepage copy.
export const homeIntroContent = {
  headline: "Replace this with the correct headline",
  summary: "Replace this with the correct summary",
  cta: "Replace this with the correct CTA",
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
