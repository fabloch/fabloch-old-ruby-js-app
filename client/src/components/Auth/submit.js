import { SubmissionError } from 'redux-form'
import { emailSignup } from '../../actions/signup'
import axios from 'axios'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


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

// export const submit = (values) => {
//   return sleep(1000) // simulate server latency
//     .then(() => {
//       // if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
//       //   throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
//       // } else if (values.password !== 'redux-form') {
//       //   throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
//       // } else {
//         emailSignup(values)
//         window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//       //
//       // }
//     })
// }
