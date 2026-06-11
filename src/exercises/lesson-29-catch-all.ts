export type Breadcrumb = {
  name: string;
  href: string;
};

// TODO: Parse dynamic catch-all slug segments (e.g., ["docs", "routing"])
// into accumulated Breadcrumbs objects.
// Example: ["docs", "routing"] -> [{ name: "Docs", href: "/docs" }, { name: "Routing", href: "/docs/routing" }]
export function parseBreadcrumbs(segments: string[]): Breadcrumb[] {
  return [];
}
