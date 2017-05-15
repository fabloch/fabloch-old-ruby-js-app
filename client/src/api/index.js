import axios from "axios"

const fetch = (url, method, data = undefined) =>
  axios({
    url: `/v1/${url}`,
    method,
    responseType: "json",
    data,
  })

const fetchProfile = () =>
  axios({
    url: "/v1/profile",
    method: "get",
    responseType: "json",
  })

export default {
  fetch,
  fetchProfile,
}
