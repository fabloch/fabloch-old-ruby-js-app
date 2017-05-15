import axios from "axios"

const fetch = (url, method, data = undefined) =>
  axios({
    url: `/v1/${url}`,
    method,
    responseType: "json",
    data,
  })

export default {
  fetch,
}
