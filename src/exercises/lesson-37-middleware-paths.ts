// TODO: Return false if the request path starts with "/_next" or "/api", or ends with
// ".png" or ".ico" to bypass middleware. Otherwise, return true.
export function shouldRunMiddleware(pathname: string): boolean {
  return true;
}
