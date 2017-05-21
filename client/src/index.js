import React from "react"
import { render } from "react-dom"
import "semantic-ui-css/semantic.min.css"

import Root from "./views/Root"
import configureStore from "./state/configureStore"
import setAuthHeaders from "./utils/setAuthHeaders"
import sessionActions from "./state/ducks/session/actions"

const store = configureStore()

if (localStorage.auth) {
  const authData = JSON.parse(localStorage.getItem("auth"))
  // const localStorageAuth = {
  //   client: localStorage.client,
  //   uid: localStorage.uid,
  //   token: localStorage.token,
  //   expiry: localStorage.expiry,
  // }

  setAuthHeaders(authData)
  store.dispatch(sessionActions.setCurrentUser(authData))
}

// store.dispatch(loadingOperations.startLoading())
// store.dispatch(notificationOperations.addNotification({
//   title: "First",
//   level: "success",
//   body: "First Hello world!",
// }))
// store.dispatch(notificationOperations.addNotification({
//   title: "Second",
//   level: "info",
//   body: "Second Hello world!",
// }))

render(
  <Root store={store} />,
  document.getElementById("root"))
