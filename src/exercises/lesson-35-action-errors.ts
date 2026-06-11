// TODO: Run the provided action() callback.
// If it succeeds, return { success: true, data: result }.
// If it throws an error, catch it and return { success: false, error: errorMessage } (e.g. err.message).
export function runServerActionSafe(action: () => string) {
  const result = action();
  return {
    success: true,
    data: result,
  };
}
