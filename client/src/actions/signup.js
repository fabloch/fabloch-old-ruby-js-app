import axios from 'axios';

export const userSignupRequest = (userData) => {

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
