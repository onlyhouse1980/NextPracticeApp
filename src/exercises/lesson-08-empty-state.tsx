export type Resource = {
  label: string;
  href: string;
};

export type ResourceListState =
  | {
      kind: "empty";
      message: string;
      items: Resource[];
    }
  | {
      kind: "items";
      message: string;
      items: Resource[];
    };

// TODO: Return an empty state only when the resources array is empty.
export function getResourceListState(resources: Resource[]): ResourceListState {
  void resources;

  return {
    kind: "empty",
    message: "No resources yet.",
    items: [],
  };
}

export function ResourceList({ resources }: { resources: Resource[] }) {
  const state = getResourceListState(resources);

  if (state.kind === "empty") {
    return (
      <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
        {state.message}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-200 rounded-md border border-slate-200">
      {state.items.map((resource) => (
        <li key={resource.href} className="p-4">
          <a className="font-semibold text-teal-700" href={resource.href}>
            {resource.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
