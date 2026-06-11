// TODO: Parse the jsonString. Return fallback if JSON.parse throws an error.
export function parseJsonSafe<T>(jsonString: string, fallback: T): T {
  return JSON.parse(jsonString) as T;
}
