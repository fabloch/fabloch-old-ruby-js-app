import axios from 'axios';
import * as ActionTypes from './ActionTypes'
import setAuthHeaders from '../api/setAuthHeaders'
// import { addNotification } from './notifications'

export const setCurrentUser = (user) => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    user
  }
}

const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST
})

const loginSuccess = (response) => (dispatch) => {
  const authHeaders = {
    client: response.headers['client'],
    uid: response.headers['uid'],
    token: response.headers['access-token'],
    expiry: response.headers['expiry'],
  }
  localStorage.setItem('client', authHeaders.client)
  localStorage.setItem('uid', authHeaders.uid)
  localStorage.setItem('token', authHeaders.token)
  localStorage.setItem('expiry', authHeaders.expiry)

  setAuthHeaders(authHeaders)
  dispatch(setCurrentUser(authHeaders))
}

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
  .then((response) => { loginSuccess(response) })
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
