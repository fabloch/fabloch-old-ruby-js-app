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
import { toastr } from "react-redux-toastr"

import actions from "./actions"
import setAuthHeaders from "../../../utils/setAuthHeaders"
import setResetAuthHeaders from "../../../utils/setResetAuthHeaders"
import toastrOptions from "../../../utils/toastrOptions"

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
    toastr.info(
      "Vous êtes connecté.e",
      "Bon surf sur le site de la FABrique.",
      toastrOptions({
        icon: "sign in",
      }),
    )
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
    toastr.success(
      "Votre compte a été créé avec succès.",
      "Vous allez être connecté.e...",
      toastrOptions({}),
    )

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
const toggleEditAccount = actions.toggleEditAccount

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
    toastr.info(
      "Identifiants mis à jour.",
      "Vos email / mot de passe ont bien été mis à jour.",
      toastrOptions({
        icon: "lock",
      }),
    )
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
    toastr.info(
      "Un email vous a été envoyé.",
      "Suivez les instructions dans l'email pour réinitialiser votre mot de passe.",
      toastrOptions({
        icon: "lock",
      }),
    )
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
    toastr.info(
      "Votre mot de passe a bien été mis à jour.",
      toastrOptions({
        icon: "lock",
      }),
    )
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
  toastr.info(
    "Deconnexion réussie.",
    "On espère vous revoir très bientôt !",
    toastrOptions({
      icon: "sign out",
    }),
  )
}

export default {
  login,
  signup,
  toggleEditAccount,
  updateAccount,
  sendPasswordResetEmail,
  setHeadersForPasswordReset,
  updatePassword,
  setCurrentUser,
  removeCurrentUser,
  logout,
}
