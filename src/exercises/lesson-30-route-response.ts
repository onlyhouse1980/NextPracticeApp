// TODO: Return a status 200 route response object with body { ok: true, source: "route handler" }.
export function createPracticeResponse() {
  return {
    status: 500,
    body: {
      ok: false,
      source: "unknown",
    },
  };
}
