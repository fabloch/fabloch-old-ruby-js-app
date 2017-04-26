import axios from 'axios'

export default (authCredentials) => {
  if (authCredentials) {
    axios.defaults.headers.common['access-token'] = authCredentials.token
    axios.defaults.headers.common['token-type'] = "Bearer"
    axios.defaults.headers.common['client'] = authCredentials.client
    axios.defaults.headers.common['expiry'] = authCredentials.expiry
    axios.defaults.headers.common['uid'] = authCredentials.uid
  } else {
    delete axios.defaults.headers.common['access-token']
    delete axios.defaults.headers.common['token-type']
    delete axios.defaults.headers.common['client']
    delete axios.defaults.headers.common['expiry']
    delete axios.defaults.headers.common['uid']
  }
}
