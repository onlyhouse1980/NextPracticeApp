// TODO: Map application error types to HTTP statuses:
// "UNAUTHORIZED" -> 401
// "NOT_FOUND"    -> 404
// "BAD_REQUEST"  -> 400
// Anything else  -> 500
export function resolveStatusCode(errorType: string): number {
  return 500;
}
