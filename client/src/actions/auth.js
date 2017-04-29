import axios from 'axios';
import * as ActionTypes from './ActionTypes'
import setAuthHeaders from '../utils/setAuthHeaders'
import { addNotification } from './notifications'

export const setCurrentUser = (user) => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    user
  }
}

export const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST
})

export const loginSuccess = (headers) => (dispatch) => {
  const authHeaders = {
    client: headers['client'],
    uid: headers['uid'],
    token: headers['access-token'],
    expiry: headers['expiry'],
  }
  localStorage.setItem('client', authHeaders.client)
  localStorage.setItem('uid', authHeaders.uid)
  localStorage.setItem('token', authHeaders.token)
  localStorage.setItem('expiry', authHeaders.expiry)

  setAuthHeaders(authHeaders)
  dispatch(addNotification({
    level: 'success',
    title: 'Log in successful',
    body: 'Enjoy your ride.'
  }))
  dispatch(setCurrentUser(authHeaders))
}

export const loginFailure = (response) => ({
  type: ActionTypes.LOGIN_FAILURE,
  errors: response.data.errors
})

export const startLogin = (userData) => (dispatch) => {
  dispatch(loginRequest())
  return axios({
    url: '/auth/sign_in',
    method: 'post',
    responseType: 'json',
    data: {
      ...userData,
      confirm_success_url: "http://localhost:3000"
    }
  })
  .then((response) => {
    console.log(response.headers)
    loginSuccess(response.headers)
  })
  .catch((error) => {
    if (error.response) {
      loginFailure(error.response.data.errors)
    }
  })
}

export const logoutRequest = () => {
  return dispatch => {
    localStorage.removeItem('client')
    localStorage.removeItem('uid')
    localStorage.removeItem('token')
    localStorage.removeItem('expiry')
    setAuthHeaders(false)
    dispatch(setCurrentUser({}))
  }
}
