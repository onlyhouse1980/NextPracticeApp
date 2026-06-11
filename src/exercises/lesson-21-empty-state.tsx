import type { JSX } from "react";

export type Resource = { label: string; href: string };

export type ListState =
  | { kind: "empty"; message: string; items: [] }
  | { kind: "items"; message: string; items: Resource[] };

// TODO: Return correct state based on resources array.
// Empty: { kind: "empty", message: "No resources yet.", items: [] }
// Items: { kind: "items", message: "Resources ready.", items: resources }
export function getResourceListState(resources: Resource[]): ListState {
  return {
    kind: "items",
    message: "Resources ready.",
    items: resources,
  };
}

export function ResourceList({ resources }: { resources: Resource[] }): JSX.Element {
  const state = getResourceListState(resources);

  if (state.kind === "empty") {
    return (
      <div className="rounded-md border border-slate-200 bg-slate-50 p-5 text-center">
        <p className="text-sm font-semibold text-slate-900">{state.message}</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
      {state.items.map((item) => (
        <li key={item.label} className="px-4 py-3 text-sm text-slate-700">
          <a
            href={item.href}
            className="font-semibold text-teal-600 hover:underline"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
