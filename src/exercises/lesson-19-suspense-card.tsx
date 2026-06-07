// TODO: Match the fallback label and render three rows.
export const fallbackLabel: string = "Loading";
export const fallbackRows: number = 1;

export function FallbackCard() {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-700">{fallbackLabel}</p>
      <div className="mt-4 grid gap-2">
        {Array.from({ length: fallbackRows }).map((_, index) => (
          <div
            key={index}
            className="h-2 rounded-full bg-slate-200"
            style={{ width: `${70 - index * 12}%` }}
          />
        ))}
      </div>
    </div>
  );
}
