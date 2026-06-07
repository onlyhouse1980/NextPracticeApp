export const homeIntroContent = {
  // TODO: Replace this starter copy with the expected lesson copy.
  headline: "Build the habit of fixing real Next.js files",
  summary: "Open a lesson, edit the referenced file, and return to the browser to verify the result.",
  cta: "Start Lesson 1",
};

export function HomeIntro() {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-xl font-semibold text-slate-950">
        {homeIntroContent.headline}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {homeIntroContent.summary}
      </p>
      <span className="mt-4 inline-flex h-10 items-center rounded-md bg-slate-950 px-3 text-sm font-semibold text-white">
        {homeIntroContent.cta}
      </span>
    </div>
  );
}
