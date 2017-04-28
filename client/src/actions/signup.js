import axios from 'axios'
import * as ActionTypes from './ActionTypes'
import { addNotification} from './notifications'
import { startLogin } from './auth'

export const emailSignupRequest = () => ({
  type: ActionTypes.EMAIL_SIGNUP_REQUEST
})

export const emailSignupSuccess = (res) => (dispatch) => {
  dispatch(addNotification({
    level: 'success',
    title: 'Account created',
    body: 'Account created successfully.'
  }))
  dispatch(startLogin(res))
}

export const emailSignupFailure = (res) => ({
  type: ActionTypes.EMAIL_SIGNUP_FAILURE,
  res
})

export const backendFailure = () => ({
  type: ActionTypes.BACKEND_FAILURE
})

export const emailSignup = (userData) => (dispatch) => {
  dispatch(emailSignupRequest())
  return axios({
    url: '/auth',
    method: 'post',
    responseType: 'json',
    data: {
      ...userData,
      confirm_success_url: "http://localhost:3000"
    }
  })
  .then((res) => { dispatch(emailSignupSuccess(res)); })
  .catch((err) => {
    if (err.response) {
      console.log(err.response.data.errors)
      dispatch(emailSignupFailure(err.response.data.errors))
    } else if (err.request) {
      dispatch(backendFailure())
    }
  })
}
