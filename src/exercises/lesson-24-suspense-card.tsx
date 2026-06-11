import type { JSX } from "react";

// TODO: Configure the fallback values to match the expected skeleton design.
export const fallbackLabel: string = "Loading preview";
export const fallbackRows: number = 2;

export function FallbackCard(): JSX.Element {
  const rows = Array.from({ length: fallbackRows });

  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
        {fallbackLabel}...
      </p>
      <div className="mt-4 space-y-3">
        {rows.map((_, i) => (
          <div
            key={i}
            className="h-2 rounded-full bg-slate-200"
            style={{ width: `${100 - i * 15}%` }}
          />
        ))}
      </div>
    </div>
  );
}
