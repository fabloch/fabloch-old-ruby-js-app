/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don"t export plain objects
*/

import types from "./types"


const getProfileRequest = () => ({
  type: types.GET_REQUEST,
})
const getProfileFailure = error => ({
  type: types.GET_FAILURE,
  error,
})
const getProfileSuccess = data => ({
  type: types.GET_SUCCESS,
  data,
})

const postProfileRequest = () => ({
  type: types.POST_REQUEST,
})
const postProfileFailure = errors => ({
  type: types.POST_FAILURE,
  errors,
})
const postProfileSuccess = () => ({
  type: types.POST_SUCCESS,
})

const putProfileRequest = () => ({
  type: types.PUT_REQUEST,
})
const putProfileFailure = errors => ({
  type: types.PUT_FAILURE,
  errors,
})
const putProfileSuccess = () => ({
  type: types.PUT_SUCCESS,
})

const deleteProfileRequest = () => ({
  type: types.DELETE_REQUEST,
})
const deleteProfileFailure = errors => ({
  type: types.DELETE_FAILURE,
  errors,
})
const deleteProfileSuccess = () => ({
  type: types.DELETE_SUCCESS,
})

export default {
  getProfileRequest,
  getProfileFailure,
  getProfileSuccess,

  postProfileRequest,
  postProfileFailure,
  postProfileSuccess,

  putProfileRequest,
  putProfileFailure,
  putProfileSuccess,

  deleteProfileRequest,
  deleteProfileFailure,
  deleteProfileSuccess,
}
