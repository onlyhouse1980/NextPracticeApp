export type PracticeResponse = {
  status: number;
  body: {
    ok: boolean;
    source: string;
  };
};

// TODO: Return the successful JSON-style response shape for a route handler.
export function createPracticeResponse(): PracticeResponse {
  return {
    status: 500,
    body: {
      ok: false,
      source: "placeholder",
    },
  };
}
