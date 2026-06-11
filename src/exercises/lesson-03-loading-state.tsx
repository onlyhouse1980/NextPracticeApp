import type { JSX } from "react";

// TODO: Return "Loading [resourceName]..." dynamically using the input parameter.
export function getLoadingMessage(resourceName: string) {
  return "Loading resources...";
}

export function LoadingPanel({ resourceName }: { resourceName: string }): JSX.Element {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <div className="h-2 w-24 rounded-full bg-slate-200" />
      <div className="mt-3 h-2 w-36 rounded-full bg-slate-200" />
      <p className="mt-4 font-mono text-xs text-slate-500">
        {getLoadingMessage(resourceName)}
      </p>
    </div>
  );
}
