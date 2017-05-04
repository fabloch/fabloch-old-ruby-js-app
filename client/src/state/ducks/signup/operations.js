/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck
-- what can be dispatched from components
Simple operations are just about forwarding
an action creator, ex: simpleQuack
Complex operations involve returning
a thunk that dispatches multiple actions in a certain order
*/

import axios from "axios"
import actions from "./actions"

import { addNotification } from "../notification/actions"
import { login } from "../auth/actions"

const emailSignup = userData => (dispatch) => {
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
    dispatch(addNotification({
      level: "success",
      title: "Account created",
      body: "Account created successfully.",
    }))
    dispatch(login(userData))
  })
  .catch((err) => {
    if (err.response) {
      dispatch(actions.signupFailure(err.response.data.errors))
    } else if (err.request) {
      console.log(err.request)
    }
  })
}
export default {
  emailSignup,
}
