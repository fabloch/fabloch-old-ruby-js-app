import axios from "axios"
import { SubmissionError } from "redux-form"

import actions from "./actions"
import setAuthHeaders from "../../../utils/setAuthHeaders"
import notificationOperations from "../notification/operations"

const login = userData => (dispatch) => {
  dispatch(actions.loginRequest())
  return axios({
    url: "/auth/sign_in",
    method: "post",
    responseType: "json",
    data: {
      ...userData,
      confirm_success_url: "http://localhost:3000",
    },
  })
  .then((response) => {
    const headers = response.headers
    const authHeaders = {
      client: headers.client,
      uid: headers.uid,
      token: headers["access-token"],
      expiry: headers.expiry,
    }
    dispatch(actions.loginSuccess(authHeaders))
    localStorage.setItem("client", authHeaders.client)
    localStorage.setItem("uid", authHeaders.uid)
    localStorage.setItem("token", authHeaders.token)
    localStorage.setItem("expiry", authHeaders.expiry)

    setAuthHeaders(authHeaders)

    dispatch(notificationOperations.addNotification({
      level: "success",
      title: "Log in successful",
      body: "Enjoy your ride.",
    }))
  })
  .catch((err) => {
    if (err.response) {
      dispatch(actions.loginFailure(err.response.data.errors))
      throw new SubmissionError({_error: err.response.data.errors[0]})
    } else if (err.request) {
      // do something
      // TODO: bad request
    }
  })
}

const logout = () => (dispatch) => {
  localStorage.removeItem("client")
  localStorage.removeItem("uid")
  localStorage.removeItem("token")
  localStorage.removeItem("expiry")
  setAuthHeaders(false)
  dispatch(actions.logout())
  dispatch(actions.removeCurrentUser())
}

const setCurrentUser = actions.setCurrentUser
const removeCurrentUser = actions.removeCurrentUser

export default {
  setCurrentUser,
  removeCurrentUser,
  login,
  logout,
}
