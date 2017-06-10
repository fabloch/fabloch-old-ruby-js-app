import React from "react"
import { render } from "react-dom"
import "semantic-ui-css/semantic.min.css"
import "react-redux-toastr/src/styles/index.scss"

import Root from "./views/Root"
import configureStore from "./state/configureStore"
import setAuthHeaders from "./utils/setAuthHeaders"
import sessionActions from "./state/ducks/session/actions"
// import notificationOperations from "./state/ducks/notification/operations"

import "./index.css"

const store = configureStore()

if (localStorage.auth) {
  const authData = JSON.parse(localStorage.getItem("auth"))

  setAuthHeaders(authData)
  store.dispatch(sessionActions.setCurrentUser(authData))
}
const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC

// store.dispatch(notificationOperations.addNotification({
//   level: "success",
//   title: "Login successful",
//   body: "Login was successful",
// }))
//
// store.dispatch(notificationOperations.addNotification({
//   icon: "setting",
//   loading: true,
//   size: "large",
//   level: "success",
//   title: "Votre compte a bien été mis à jour.",
// }))
//
render(
  <Root store={store} stripeKey={stripeKey} style={{ height: "100%" }} />,
  document.getElementById("root"))
