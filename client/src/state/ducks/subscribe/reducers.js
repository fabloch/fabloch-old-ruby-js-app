import { fromJS } from "immutable"
import types from "./types"
import utils from "./utils"
import initialState from "./initialState"

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
  default:
    return state
  }
}


export default subscriptionsReducer
