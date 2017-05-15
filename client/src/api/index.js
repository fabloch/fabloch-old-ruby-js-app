import axios from "axios"

const fetchProfile = () =>
  axios({
    url: "/v1/profile",
    method: "get",
    responseType: "json",
  })
  .then(response => response.data.data.attributes)
  .catch((error) => {
    if (error.response) {
      return error.response
    } else if (error.request) {
      return error.request
    }
    return (error.message)
  })

export {
  fetchProfile,
}
