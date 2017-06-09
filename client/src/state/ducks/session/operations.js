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
import setResetAuthHeaders from "../../../utils/setResetAuthHeaders"
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

/* updateAccount */
const updateAccount = data => (dispatch) => {
  dispatch(actions.updateAccountRequest())
  return axios({
    url: "/auth",
    method: "put",
    responseType: "json",
    data,
  })
  .then(() => {
    dispatch(actions.updateAccountSuccess())
    dispatch(notificationOperations.addNotification({
      icon: "setting",
      loading: true,
      level: "success",
      title: "Vos identifiants de connexion ont bien été mis à jour.",
    }))
    dispatch(actions.toggleEditAccount())
  })
  .catch((err) => {
    if (err.response) {
      dispatch(actions.updateAccountFailure(err.response.data.errors))
      throw new SubmissionError(err.response.data.errors)
    } else if (err.request) {
      // do something
      // TODO: bad request
    }
  })
}

/* sendPasswordResetEmail */
const sendPasswordResetEmail = data => (dispatch) => {
  dispatch(actions.sendPasswordResetEmailRequest())
  return axios({
    url: "/auth/password",
    method: "post",
    responseType: "json",
    data,
  })
  .then(() => {
    dispatch(actions.sendPasswordResetEmailSuccess())
    dispatch(notificationOperations.addNotification({
      icon: "setting",
      loading: true,
      level: "info",
      title: "Un email vous a été envoyé pour réinitialiser votre mot de passe.",
    }))
  })
  .catch((err) => {
    if (err.response) {
      console.log(err.response)
      dispatch(actions.sendPasswordResetEmailFailure(err.response.data.errors))
      throw new SubmissionError(err.response.data.errors)
    } else if (err.request) {
      console.log(err.request)
      // do something
      // TODO: bad request
    }
    console.log(err)
  })
}

/* updatePassword */
const setHeadersForPasswordReset = data => (dispatch) => {
  setResetAuthHeaders(data)
  dispatch(actions.setHeadersForPasswordReset(data))
}

const updatePassword = data => (dispatch) => {
  dispatch(actions.updatePasswordRequest())
  return axios({
    url: "/auth/password",
    method: "put",
    responseType: "json",
    data,
  })
  .then(() => {
    dispatch(actions.updatePasswordSuccess())
    dispatch(notificationOperations.addNotification({
      icon: "setting",
      loading: true,
      level: "success",
      title: "Votre mot de passe a bien été mis à jour.",
    }))
  })
  .catch((err) => {
    if (err.response) {
      console.log(err.response.data)
      dispatch(actions.updatePasswordFailure(err.response.data.errors))
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
  login,
  signup,
  updateAccount,
  sendPasswordResetEmail,
  setHeadersForPasswordReset,
  updatePassword,
  setCurrentUser,
  removeCurrentUser,
  logout,
}
