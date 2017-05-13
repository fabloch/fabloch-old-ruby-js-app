/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don"t export plain objects
*/

import types from "./types"


/* Signup */
const signupRequest = () => ({
  type: types.SIGNUP_REQUEST,
})

const signupFailure = errors => ({
  type: types.SIGNUP_FAILURE,
  errors,
})

const signupSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
})


/* Login */
const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
})

const loginSuccess = data => ({
  type: types.LOGIN_SUCCESS,
  data,
})

const loginFailure = errors => ({
  type: types.LOGIN_FAILURE,
  errors,
})

const setCurrentUser = data => ({
  type: types.SET_CURRENT_USER,
  data,
})

const removeCurrentUser = () => ({
  type: types.REMOVE_CURRENT_USER,
})


/* Logout */
const logout = () => ({
  type: types.LOGOUT,
})

export default {
  signupRequest,
  signupFailure,
  signupSuccess,

  setCurrentUser,
  removeCurrentUser,

  loginRequest,
  loginSuccess,
  loginFailure,

  logout,
}
