// TODO: Format standard system errors into clean API error structures.
// - If error.message contains "database" or "conn" (case insensitive),
//   return { code: "INTERNAL_ERROR", message: "An unexpected error occurred" }
// - Otherwise, return { code: "VALIDATION_ERROR", message: error.message }
export function mapApiError(error: Error) {
  return {
    code: "ERROR",
    message: error.message,
  };
}
