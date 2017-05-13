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
import notificationOperations from "../notification/operations"
import loginOperations from "../auth/operations"

const signup = userData => (dispatch) => {
  dispatch(actions.signupRequest())
  return axios({
    url: "/auth",
    method: "post",
    responseType: "json",
    data: {
      ...userData,
      confirm_success_url: "http://localhost:3000" } })
  .then(() => {
    dispatch(actions.signupSuccess())
    dispatch(notificationOperations.addNotification({
      level: "success",
      title: "Account created",
      body: "Account created successfully.",
    }))
    dispatch(loginOperations.login(userData))
  })
  .catch((err) => {
    if (err.response) {
      dispatch(actions.signupFailure(err.response.data.errors))
      throw new SubmissionError(err.response.data.errors)
    } else if (err.request) {
      // do something
      // TODO: bad request
    }
  })
}
export default {
  signup,
}
