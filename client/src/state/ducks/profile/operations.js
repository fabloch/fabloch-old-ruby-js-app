/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck
-- what can be dispatched from components
Simple operations are just about forwarding
an action creator, ex: simpleQuack
Complex operations involve returning
a thunk that dispatches multiple actions in a certain order
*/

import axios from "axios"
import { SubmissionError } from "redux-form"

import actions from "./actions"

const fetchProfile = () => (dispatch) => {
  dispatch(actions.fetchProfileRequest())
  return axios({
    url: "/profile",
    method: "get",
    responseType: "json",
  })
  .then((response) => {
    dispatch(actions.fetchProfileSuccess(response.data))
  })
  .catch((err) => {
    if (err.response) {
      dispatch(actions.fetchProfileFailure({
        status: err.response.status,
        statusText: err.response.statusText,
      }))
    } else if (err.request) {
      // do something
      // TODO: bad request
    }
  })
}

const submit = data => (dispatch) => {
  dispatch(actions.postProfileRequest())
  return axios({
    url: "v1/profile",
    method: "post",
    responseType: "json",
    data,
  })
  .then((response) => {
    console.log(response.data.attributes)
    dispatch(actions.postProfileSuccess(response.data.attributes))
  })
  .catch((err) => {
    if (err.response) {
      console.log(err.response.data)
      dispatch(actions.postProfileFailure(err.response.data.errors))
      throw new SubmissionError(err.response.data.errors)
    } else if (err.request) {
      // do something
      // TODO: bad request
    }
  })
}

export default {
  fetchProfile,
  submit,
}
