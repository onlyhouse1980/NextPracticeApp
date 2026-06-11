export const homeIntroContent = {
  // TODO: Replace this starter copy with the expected lesson copy.
  headline: "Edit page.tsx to get started",
  summary: "This is still the generated starter message.",
  cta: "Documentation",
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
