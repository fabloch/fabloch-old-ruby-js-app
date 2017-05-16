/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck
-- what can be dispatched from components
Simple operations are just about forwarding
an action creator, ex: simpleQuack
Complex operations involve returning
a thunk that dispatches multiple actions in a certain order
*/

import { SubmissionError } from "redux-form"
import { push } from "react-router-redux"
import api from "../../../api"
import actions from "./actions"
import { loadingOperations } from "../loading"

const fetchProfile = () => (dispatch) => {
  dispatch(loadingOperations.startLoading())
  dispatch(actions.fetchProfileRequest())
  return api.fetch("profile", "get")
  .then((response) => {
    dispatch(loadingOperations.stopLoading())
    dispatch(
      actions.fetchProfileSuccess(response.data.data.attributes),
    )
  })
  .catch((error) => {
    if (error.response) {
      dispatch(loadingOperations.stopLoading())
      return dispatch(actions.fetchProfileFailure({
        status: error.response.status,
        statusText: error.response.statusText,
      }))
    } else if (error.request) {
      return error.request
    }
    return (error.message)
  })
}

const postProfile = data => (dispatch) => {
  dispatch(loadingOperations.startLoading())
  dispatch(actions.postProfileRequest())
  return api.fetch("profile", "post", data)
  .then((response) => {
    dispatch(loadingOperations.stopLoading())
    dispatch(
      actions.postProfileSuccess(response.data.data.attributes),
    )
    dispatch(push("/profile"))
  })
  .catch((error) => {
    if (error.response) {
      dispatch(loadingOperations.stopLoading())
      dispatch(actions.postProfileFailure())
      throw new SubmissionError(error.response.data)
    } else if (error.request) {
      // do something
      // TODO: bad request
    }
  })
}

const putProfile = data => (dispatch) => {
  dispatch(loadingOperations.startLoading())
  dispatch(actions.putProfileRequest())
  return api.fetch("profile", "put", data)
  .then((response) => {
    dispatch(loadingOperations.stopLoading())
    dispatch(
      actions.putProfileSuccess(response.data.data.attributes),
    )
    dispatch(push("/profile"))
  })
  .catch((error) => {
    if (error.response) {
      dispatch(loadingOperations.stopLoading())
      dispatch(actions.putProfileFailure())
      throw new SubmissionError(error.response.data)
    } else if (error.request) {
      // do something
      // TODO: bad request
    }
  })
}

const toggleEditing = actions.toggleEditing

export default {
  fetchProfile,
  toggleEditing,
  postProfile,
  putProfile,
}
