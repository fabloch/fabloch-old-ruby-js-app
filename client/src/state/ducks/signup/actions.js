/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don"t export plain objects
*/

import types from "./types"

const signupRequest = () => ({
  type: types.SIGNUP_REQUEST,
})

const signupFailure = res => ({
  type: types.SIGNUP_FAILURE,
  res,
})

const signupSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
})

export default {
  signupRequest,
  signupFailure,
  signupSuccess,
}
