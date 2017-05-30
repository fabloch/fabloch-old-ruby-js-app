import { fromJS } from "immutable"
import types from "./types"
import utils from "./utils"
import initialState from "./initialState"
import { localizedFromNow, daysFromNow } from "../../../utils/dateAndTime"

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

const planPriceCents = (plan) => {
  switch (plan) {
  case ("regular"):
    return 2000
  case ("pro"):
    return 4000
  case ("company"):
    return 10000
  default:
    return ""
  }
}

const planLocalizedWithMoney = (plan) => {
  switch (plan) {
  case ("regular"):
    return "Particuliers (20€)"
  case ("pro"):
    return "Indépendants (40€)"
  case ("company"):
    return "Entreprises (100€)"
  default:
    return ""
  }
}

const paymentMethodLocalized = (paymentMethod) => {
  switch (paymentMethod) {
  case ("card"):
    return "Carte bancaire"
  case ("checkOrCash"):
    return "Chèque ou espèces"
  default:
    return ""

  }
}

const paymentMethodPending = (paymentMethod) => {
  switch (paymentMethod) {
  case ("card"):
    return false
  case ("checkOrCash"):
    return true
  default:
    return ""

  }
}

const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_SUBSCRIPTIONS_REQUEST:
    return state.set("isLoading", true)
  case types.FETCH_SUBSCRIPTIONS_SUCCESS:
    return state
      .set("isLoading", false)
      .set("loadErrors", false)
      .setIn(["present", "plan"], utils.plan(action.data))
      .setIn(["present", "memberUntil"], utils.memberUntil(action.data))
      .setIn(["present", "memberUntilFromNow"], utils.memberUntilFromNow(action.data))
      .setIn(["present", "memberUntilFromNowInDays"], utils.memberUntilFromNowInDays(action.data))
      .setIn(["present", "memberSince"], utils.memberSince(action.data))
      .setIn(["present", "memberSinceFromNow"], utils.memberSinceFromNow(action.data))
      .setIn(["present", "memberSinceFromNowInDays"], utils.memberSinceFromNowInDays(action.data))
      .setIn(["present", "shouldResubscribe"], utils.shouldResubscribe(action.data))
      .set("all", fromJS(action.data))
      .setIn(["new", "startDate"], utils.newSubscriptionStart(action.data))
      .setIn(["new", "endDate"], utils.newSubscriptionEnd(action.data))
  case types.FETCH_SUBSCRIPTIONS_FAILURE:
    return state
      .set("isLoading", false)
      .set("loadErrors", true)

  case types.SELECT_PLAN:
    return state
      .setIn(["steps", 0, "plan"], action.plan)
      .setIn(["steps", 0, "planLocalized"], planLocalized(action.plan))
      .setIn(["steps", 0, "description"], planLocalizedWithMoney(action.plan))
      .setIn(["steps", 0, "completed"], true)
      .setIn(["steps", 0, "active"], false)
      .setIn(["steps", 1, "disabled"], false)
      .setIn(["steps", 1, "active"], true)
      .setIn(["new", "plan"], action.plan)
      .setIn(["new", "priceCents"], planPriceCents(action.plan))
  case types.SELECT_PAYMENT_METHOD:
    return state
      .setIn(["steps", 1, "paymentMethod"], action.paymentMethod)
      .setIn(["steps", 1, "paymentMethodLocalized"], paymentMethodLocalized(action.paymentMethod))
      .setIn(["steps", 1, "description"], paymentMethodLocalized(action.paymentMethod))
      .setIn(["steps", 1, "completed"], true)
      .setIn(["steps", 1, "active"], false)
      .setIn(["steps", 2, "disabled"], false)
      .setIn(["steps", 2, "active"], true)
      .setIn(["new", "paymentMethod"], action.paymentMethod)
      .setIn(["new", "pending"], paymentMethodPending(action.paymentMethod))
  case types.FOCUS_STEP:
    return state
      .setIn(["steps", 0, "active"], false)
      .setIn(["steps", 1, "active"], false)
      .setIn(["steps", 2, "active"], false)
      .setIn(["steps", action.step, "active"], true)
      .setIn(["steps", action.step, "completed"], false)
  case types.POST_SUBSCRIPTION_REQUEST:
    return state
      .set("isLoading", true)
  case types.POST_SUBSCRIPTION_FAILURE:
    return state
      .set("isLoading", false)
      .set("loadErrors", true)
  case types.POST_SUBSCRIPTION_SUCCESS:
    return state
      .set("isLoading", false)
      .set("loadErrors", false)
      .delete("new")
      .update("all", list => list.push(fromJS(action.data)))
      .setIn(["present", "plan"], action.data.plan)
      .setIn(["present", "memberUntil"], action.data.end)
      .setIn(["present", "memberUntilFromNow"], localizedFromNow(action.data.end))
      .setIn(["present", "memberUntilFromNowInDays"], daysFromNow(action.data.end))
      .deleteIn(["present", "memberSince"])
      .deleteIn(["present", "memberSinceFromNow"])
      .deleteIn(["present", "memberSinceFromNowInDays"])
      .deleteIn(["present", "shouldResubscribe"])
  default:
    return state
  }
}

export default subscriptionsReducer
