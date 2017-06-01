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
import setAuthHeaders from "../../../utils/setAuthHeaders"
import notificationOperations from "../notification/operations"

/* Login */
const login = data => (dispatch) => {
  dispatch(actions.loginRequest())
  return axios({
    url: "/auth/sign_in",
    method: "post",
    responseType: "json",
    data,
  })
  .then((response) => {
    const auth = {
      client: response.headers.client,
      uid: response.headers.uid,
      token: response.headers["access-token"],
      expiry: response.headers.expiry,
    }
    dispatch(actions.loginSuccess(auth))
    localStorage.setItem("auth", JSON.stringify(auth))

    setAuthHeaders(auth)

    dispatch(notificationOperations.addNotification({
      level: "success",
      title: "Vous êtes connecté.e",
      body: "Bon surf sur le site de la FABrique.",
    }))
  })
  .catch((err) => {
    if (err.response) {
      dispatch(actions.loginFailure(err.response.data.errors))
      throw new SubmissionError({ _error: err.response.data.errors[0] })
    } else if (err.request) {
      // TODO: bad request
    }
  })
}

/* Signup */
const signup = data => (dispatch) => {
  dispatch(actions.signupRequest())
  return axios({
    url: "/auth",
    method: "post",
    responseType: "json",
    data,
  })
  .then(() => {
    dispatch(actions.signupSuccess())
    dispatch(notificationOperations.addNotification({
      level: "success",
      title: "Votre compte a été créé avec succès.",
      body: "Vous allez être connecté.e bientôt...",
    }))
    dispatch(login(data))
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

const setCurrentUser = actions.setCurrentUser
const removeCurrentUser = actions.removeCurrentUser

/* Logout */
const logout = () => (dispatch) => {
  localStorage.clear()
  setAuthHeaders(false)
  dispatch(actions.logout())
  dispatch(notificationOperations.addNotification({
    level: "success",
    title: "Successfully disconnected",
    body: "You have been disconnected successfully.",
  }))
}

export default {
  signup,

  login,
  setCurrentUser,
  removeCurrentUser,

  logout,
}
