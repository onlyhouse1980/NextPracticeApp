// TODO: Inspect requestHeaders["x-user-role"].
// If role is "admin", set outgoing response header "x-admin-route" to "allowed".
// Otherwise, set outgoing response header "x-admin-route" to "denied".
// Return the outgoing headers object.
export function setTrackingHeaders(requestHeaders: Record<string, string>): Record<string, string> {
  return {};
}
