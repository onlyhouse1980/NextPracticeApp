// TODO: Return the specific loading message for the requested resource.
export function getLoadingMessage(resourceName: string) {
  void resourceName;

  return "Loading...";
}

export function LoadingPanel({ resourceName }: { resourceName: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <div className="h-2 w-24 rounded-full bg-slate-200" />
      <div className="mt-3 h-2 w-36 rounded-full bg-slate-200" />
      <p className="mt-4 text-sm font-semibold text-slate-700">
        {getLoadingMessage(resourceName)}
      </p>
    </div>
  );
}
