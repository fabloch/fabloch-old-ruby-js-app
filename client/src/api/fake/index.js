import {
  subscriptions,
  subscriptionPlans,
} from "./data"

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

const fetch = (url, method) =>
  delay(500).then(() => {
    switch (url) {
    case "membership":
      if (method === "get") {
        return membership
      }
      return ""
    case "subscription_plans":
      if (method === "get") {
        return subscriptionPlans
      }
    default:
      throw new Error()
    }
  })

export default {
  fetch,
}
