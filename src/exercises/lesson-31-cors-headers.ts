// TODO: Return a status 200 API response configuration containing CORS headers:
// - Access-Control-Allow-Origin: "*"
// - Access-Control-Allow-Methods: "GET, POST, OPTIONS"
export function createCorsResponse() {
  return {
    status: 200,
    headers: {} as Record<string, string>,
  };
}
