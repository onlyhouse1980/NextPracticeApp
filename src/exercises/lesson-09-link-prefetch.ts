// TODO: Return false if href is an external URL (starts with "http://" or "https://"),
// otherwise return true to prefetch internal routes.
export function shouldPrefetch(href: string): boolean {
  return false;
}
