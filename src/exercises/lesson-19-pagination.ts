// TODO: Extract page and limit from parameters, validate they are positive numbers,
// and return calculated { limit, offset } where offset = (page - 1) * limit.
// Page defaults to 1, limit defaults to 10 if missing or invalid.
export function getPagination(params: URLSearchParams) {
  return {
    limit: 10,
    offset: 0,
  };
}
