// TODO: Configure fetch options to include Next.js specific cache rules:
// - next.revalidate should be 300 (seconds)
// - next.tags should be ["products", "catalog"]
// Preserve the headers key.
export function getFetchOptions() {
  return {
    headers: { "Content-Type": "application/json" },
  };
}
