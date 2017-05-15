/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don"t export plain objects
*/

import types from "./types"


const fetchProfileRequest = () => ({
  type: types.FETCH_REQUEST,
})
const fetchProfileFailure = error => ({
  type: types.FETCH_FAILURE,
  error,
})
const fetchProfileSuccess = data => ({
  type: types.FETCH_SUCCESS,
  data,
})

const postProfileRequest = () => ({
  type: types.POST_REQUEST,
})
const postProfileFailure = errors => ({
  type: types.POST_FAILURE,
  errors,
})
const postProfileSuccess = data => ({
  type: types.POST_SUCCESS,
  data,
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
  fetchProfileRequest,
  fetchProfileFailure,
  fetchProfileSuccess,

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
