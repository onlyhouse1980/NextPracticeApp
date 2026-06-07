// TODO: Read the "q" search param and fall back to "all" when it is missing.
export function getSearchTerm(searchParams: URLSearchParams) {
  return searchParams.get("query") ?? "all";
}
