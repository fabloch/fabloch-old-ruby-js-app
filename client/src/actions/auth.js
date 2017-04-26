import axios from 'axios';
import { SET_CURRENT_USER } from './types'
import setAuthHeaders from '../api/setAuthHeaders'

export const signupRequest = (userData) => {
  return dispatch => {
    return axios({
      url: '/auth',
      method: 'post',
      responseType: 'json',
      data: {
        ...userData,
        confirm_success_url: "http://localhost:3000"
      }
    })
  }
}

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export const loginRequest = (userData) => {
  return dispatch => {
    return axios({
      url: '/auth/sign_in',
      method: 'post',
      responseType: 'json',
      data: {
        ...userData,
        confirm_success_url: "http://localhost:3000"
      }
    }).then((response) => {
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
    })
  }
}
