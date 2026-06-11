import type { JSX } from "react";

export type Feature = { title: string; enabled: boolean };

// TODO: Filter out disabled features and map them to their string titles.
export function getFeatureLabels(features: Feature[]): string[] {
  return [];
}

export function FeatureList({ features }: { features: Feature[] }): JSX.Element {
  const labels = getFeatureLabels(features);

  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        Current features
      </p>
      <ul className="mt-3 grid gap-2">
        {labels.map((label) => (
          <li
            key={label}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
