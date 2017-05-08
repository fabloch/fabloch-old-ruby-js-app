/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don"t export plain objects
*/

import types from "./types"

const signupRequest = () => ({
  type: types.REQUEST,
})

const signupFailure = errors => ({
  type: types.FAILURE,
  errors,
})

const signupSuccess = () => ({
  type: types.SUCCESS,
})

export default {
  signupRequest,
  signupFailure,
  signupSuccess,
}
