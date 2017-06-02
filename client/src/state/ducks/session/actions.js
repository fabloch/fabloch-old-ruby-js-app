/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don"t export plain objects
*/

import types from "./types"


/* signup */
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


/* login */
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

/* updateAccount */
const toggleEditAccount = () => ({
  type: types.TOGGLE_EDIT_ACCOUNT,
})
const updateAccountRequest = () => ({
  type: types.UPDATE_ACCOUNT_REQUEST,
})
const updateAccountSuccess = () => ({
  type: types.UPDATE_ACCOUNT_SUCCESS,
})
const updateAccountFailure = errors => ({
  type: types.UPDATE_ACCOUNT_FAILURE,
  errors,
})

/* passwordReset */
const passwordResetRequest = () => ({
  type: types.PASSWORD_RESET_REQUEST,
})
const passwordResetSuccess = data => ({
  type: types.PASSWORD_RESET_SUCCESS,
  data,
})
const passwordResetFailure = errors => ({
  type: types.PASSWORD_RESET_FAILURE,
  errors,
})

/* updatePassword */
const updatePasswordRequest = () => ({
  type: types.UPDATE_PASSWORD_REQUEST,
})
const updatePasswordSuccess = data => ({
  type: types.UPDATE_PASSWORD_SUCCESS,
  data,
})
const updatePasswordFailure = errors => ({
  type: types.UPDATE_PASSWORD_FAILURE,
  errors,
})

/* currentUser */
const setCurrentUser = data => ({
  type: types.SET_CURRENT_USER,
  data,
})
const removeCurrentUser = () => ({
  type: types.REMOVE_CURRENT_USER,
})


/* logout */
const logout = () => ({
  type: types.LOGOUT,
})

export default {
  signupRequest,
  signupFailure,
  signupSuccess,

  loginRequest,
  loginSuccess,
  loginFailure,

  toggleEditAccount,
  updateAccountRequest,
  updateAccountFailure,
  updateAccountSuccess,

  passwordResetRequest,
  passwordResetFailure,
  passwordResetSuccess,

  updatePasswordRequest,
  updatePasswordFailure,
  updatePasswordSuccess,

  setCurrentUser,
  removeCurrentUser,

  logout,
}
