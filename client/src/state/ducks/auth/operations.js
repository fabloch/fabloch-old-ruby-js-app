import axios from "axios"
import actions from "./actions"
import { setAuthHeaders } from "./utils"
import { addNotification } from "../notification/actions"

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
    localStorage.setItem("client", authHeaders.client)
    localStorage.setItem("uid", authHeaders.uid)
    localStorage.setItem("token", authHeaders.token)
    localStorage.setItem("expiry", authHeaders.expiry)

    setAuthHeaders(authHeaders)
    dispatch(addNotification({
      level: "success",
      title: "Log in successful",
      body: "Enjoy your ride.",
    }))
    dispatch(actions.setCurrentUser(authHeaders))
  })
  .catch((error) => {
    if (error.response) {
      actions.loginFailure(error.response.data.errors)
    }
  })
}

const logout = () => (dispatch) => {
  localStorage.removeItem("client")
  localStorage.removeItem("uid")
  localStorage.removeItem("token")
  localStorage.removeItem("expiry")
  setAuthHeaders(false)
  dispatch(actions.setCurrentUser({}))
}


export default {
  login,
  logout,
}
