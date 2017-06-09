import axios from "axios"

const setResetAuthHeaders = (authCredentials) => {
  if (authCredentials) {
    axios.defaults.headers.common["access-token"] = authCredentials.token
    axios.defaults.headers.common["token-type"] = "Bearer"
    axios.defaults.headers.common.client = authCredentials.client_id
    axios.defaults.headers.common.expiry = authCredentials.expiry
    axios.defaults.headers.common.uid = authCredentials.uid
    axios.defaults.headers.common.reset_password = authCredentials.reset_password
    console.log(axios.defaults.headers)
  } else {
    delete axios.defaults.headers.common["access-token"]
    delete axios.defaults.headers.common["token-type"]
    delete axios.defaults.headers.common.client
    delete axios.defaults.headers.common.expiry
    delete axios.defaults.headers.common.uid
  }
}

export default setResetAuthHeaders
