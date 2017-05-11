import types from "./types"

const setCurrentUser = userData => ({
  type: types.SET_CURRENT_USER,
  userData,
})

const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
})

const loginSuccess = userData => ({
  type: types.LOGIN_SUCCESS,
  userData,
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
