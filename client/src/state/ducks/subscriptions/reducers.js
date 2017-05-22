import { Map, fromJS } from "immutable"
import types from "./types"
import utils from "./utils"

const initialState = Map({
})

const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_REQUEST:
    return state.set("isFetching", true)
  case types.FETCH_SUCCESS:
    return state
      .set("isFetching", false)
      .set("fetchErrors", false)
      .set("memberUntil", utils.memberUntil(action.data))
      .set("memberUntilFromNow", utils.memberUntilFromNow(action.data))
      .set("memberUntilFromNowInDays", utils.memberUntilFromNowInDays(action.data))
      .set("memberSince", utils.memberSince(action.data))
      .set("memberSinceFromNow", utils.memberSinceFromNow(action.data))
      .set("memberSinceFromNowInDays", utils.memberSinceFromNowInDays(action.data))
      .set("allMemberships", fromJS(action.data))
  case types.FETCH_FAILURE:
    return state
      .set("isFetching", false)
      .set("fetchErrors", true)
  default:
    return state
  }
}


export default subscriptionsReducer
