import types from "./types"

const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user,
})

const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
})

const loginSuccess = authHeaders => ({
  type: types.LOGIN_SUCCESS,
  authHeaders,
})

const loginFailure = errors => ({
  type: types.LOGIN_FAILURE,
  errors,
})

const logout = () => ({
  type: types.LOGOUT,
})

export default {
  setCurrentUser,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
}
