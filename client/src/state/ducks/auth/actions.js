import * as types from "./types"

const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user,
})

const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
})

const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
})

const loginFailure = response => ({
  type: types.LOGIN_FAILURE,
  errors: response.data.errors,
})

export default {
  setCurrentUser,
  loginRequest,
  loginSuccess,
  loginFailure,
}
