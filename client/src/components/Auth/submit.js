import { SubmissionError } from 'redux-form'
import axios from 'axios'

export const submit = (values) => {
  const userData = {
    email: values.email,
    password: values.password,
    password_confirmation: values.password,
  }
  return axios({
    url: '/auth',
    method: 'post',
    responseType: 'json',
    data: {
      ...userData,
      confirm_success_url: "http://localhost:3000"
    }
  })
  .then((res) => {
    window.alert(`You submitted:\n\n${JSON.stringify(userData, null, 2)}`)
  })
  .catch((err) => {
    if (err.response) {
      throw new SubmissionError(err.response.data.errors)
    } else if (err.request) {
      console.log(err.request)
    }
  })
}
