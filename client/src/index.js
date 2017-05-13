import React from "react"
import { render } from "react-dom"
import "semantic-ui-css/semantic.min.css"

import Root from "./views/Root"
import configureStore from "./state/configureStore"
import setAuthHeaders from "./utils/setAuthHeaders"
import authActions from "./state/ducks/auth/actions"

const store = configureStore()

if (localStorage.token) {
  const localStorageAuth = {
    client: localStorage.client,
    uid: localStorage.uid,
    token: localStorage.token,
    expiry: localStorage.expiry,
  }

  setAuthHeaders(localStorageAuth)
  store.dispatch(authActions.setCurrentUser(localStorageAuth))
}

render(
  <Root store={store} />,
  document.getElementById("root"))
