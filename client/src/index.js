import { config } from "dotenv"
import React from "react"
import { render } from "react-dom"
import "semantic-ui-css/semantic.min.css"

import Root from "./views/Root"
import configureStore from "./state/configureStore"
import setAuthHeaders from "./utils/setAuthHeaders"
import sessionActions from "./state/ducks/session/actions"
// import notificationOperations from "./state/ducks/notification/operations"


if (process.env.NODE_ENV === "development" || "test") {
  config()
}

const store = configureStore()

if (localStorage.auth) {
  const authData = JSON.parse(localStorage.getItem("auth"))

  setAuthHeaders(authData)
  store.dispatch(sessionActions.setCurrentUser(authData))
}
console.log("NODE_ENV", process.env.NODE_ENV)
console.log("STRIPE_PUBLIC", process.env.STRIPE_PUBLIC)
// store.dispatch(notificationOperations.addNotification({
//   level: "success",
//   title: "Login successful",
//   body: "Login was successful",
// }))
//
// store.dispatch(notificationOperations.addNotification({
//   level: "success",
//   title: "Login successful",
//   body: "Login was successful",
// }))

render(
  <Root store={store} />,
  document.getElementById("root"))
