import types from "./types"

export const login = data => (dispatch) => {
  dispatch({
    type: types.USER_LOGGING_IN,
  })
  // Wait 2 seconds before "logging in"
  setTimeout(() => {
    dispatch({
      type: types.USER_LOGGED_IN,
      payload: data,
    })
  }, 2000)
}

export function logout() {
  return {
    type: types.USER_LOGGED_OUT,
  }
}
