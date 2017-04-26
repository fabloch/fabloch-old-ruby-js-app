import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import setAuthHeaders from './api/setAuthHeaders';
import { setCurrentUser } from './actions/auth';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = configureStore();

if(localStorage.token) {
  const localStorageAuth = {
    client: localStorage.client,
    uid: localStorage.uid,
    token: localStorage.token,
    expiry: localStorage.xpiry,
  }

  setAuthHeaders(localStorageAuth)
  store.dispatch(setCurrentUser(localStorageAuth))
}

render(
  <Root store={store} />,
  document.getElementById('root')
);
