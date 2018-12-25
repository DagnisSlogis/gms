export const createReducerTypes = (key) => ({
  fetch: `${key}_FETCH`,
  fetchSuccess: `${key}_FETCH_SUCCESS`,
  fetchError: `${key}_FETCH_ERROR`,
  open: `${key}_OPEN`,
})
