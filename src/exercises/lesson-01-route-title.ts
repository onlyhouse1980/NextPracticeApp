// TODO: Convert a route slug like "server-components" into "Server Components".
export function formatRouteTitle(slug: string) {
  return slug
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
}
