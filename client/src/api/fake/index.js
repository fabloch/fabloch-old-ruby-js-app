import * as alt from "./subscriptions"

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

const fetch = (url, method) =>
  delay(500).then(() => {
    switch (url) {
    case "subscriptions":
      if (method === "get") {
        return ({
          data: alt.chosenAlt,
        })
      }
      return ""
    default:
      throw new Error()
    }
  })

export default {
  fetch,
}
