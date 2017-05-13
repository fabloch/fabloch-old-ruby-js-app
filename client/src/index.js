import React from "react"
import { render } from "react-dom"
import "semantic-ui-css/semantic.min.css"

import Root from "./views/Root"
import configureStore from "./state/configureStore"
import setAuthHeaders from "./utils/setAuthHeaders"
import sessionActions from "./state/ducks/session/actions"

const store = configureStore()

if (localStorage.token) {
  const localStorageAuth = {
    client: localStorage.client,
    uid: localStorage.uid,
    token: localStorage.token,
    expiry: localStorage.expiry,
  }

  setAuthHeaders(localStorageAuth)
  store.dispatch(sessionActions.setCurrentUser(localStorageAuth))
}

render(
  <Root store={store} />,
  document.getElementById("root"))
