import { fromJS } from "immutable"
import types from "./types"
import utils from "./utils"
import initialState from "./initialState"

const planLocalized = (plan) => {
  switch (plan) {
  case ("regular"):
    return "particuliers"
  case ("pro"):
    return "auto-entrepreneurs et indépendants"
  case ("company"):
    return "entreprises"
  default:
    return ""

  }
}

const paymentMethodLocalized = (paymentMethod) => {
  switch (paymentMethod) {
  case ("card"):
    return "carte bancaire"
  case ("cash"):
    return "espèces"
  case ("check"):
    return "chèque"
  default:
    return ""

  }
}

const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_SUBSCRIPTIONS_REQUEST:
    return state.set("isFetching", true)
  case types.FETCH_SUBSCRIPTIONS_SUCCESS:
    return state
      .set("isFetching", false)
      .set("fetchErrors", false)
      .setIn(["subscriptions", "type"], utils.type(action.data))
      .setIn(["subscriptions", "memberUntil"], utils.memberUntil(action.data))
      .setIn(["subscriptions", "memberUntilFromNow"], utils.memberUntilFromNow(action.data))
      .setIn(["subscriptions", "memberUntilFromNowInDays"], utils.memberUntilFromNowInDays(action.data))
      .setIn(["subscriptions", "memberSince"], utils.memberSince(action.data))
      .setIn(["subscriptions", "memberSinceFromNow"], utils.memberSinceFromNow(action.data))
      .setIn(["subscriptions", "memberSinceFromNowInDays"], utils.memberSinceFromNowInDays(action.data))
      .setIn(["subscriptions", "shouldResubscribe"], utils.shouldResubscribe(action.data))
      .setIn(["subscriptions", "allMemberships"], fromJS(action.data))
  case types.FETCH_SUBSCRIPTIONS_FAILURE:
    return state
      .set("isFetching", false)
      .set("fetchErrors", true)

  case types.SELECT_PLAN:
    return state
      .setIn(["steps", 0, "plan"], action.plan)
      .setIn(["steps", 0, "planLocalized"], planLocalized(action.plan))
      .setIn(["steps", 0, "done"], true)
  case types.SELECT_PAYMENT_METHOD:
    return state
      .setIn(["steps", 1, "paymentMethod"], action.paymentMethod)
      .setIn(["steps", 1, "paymentMethodLocalized"], paymentMethodLocalized(action.paymentMethod))
      .setIn(["steps", 1, "done"], true)
  default:
    return state
  }
}


export default subscriptionsReducer
