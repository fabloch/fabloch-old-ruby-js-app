import { Map, fromJS } from "immutable"
import types from "./types"

const initialState = Map({
  data: null,
  isFetching: false,
})

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
  /* Signup */
  case types.SIGNUP_REQUEST:
    return state.set("isFetching", true)

  case types.SIGNUP_SUCCESS:
    return state.set("isFetching", false)

  case types.SIGNUP_FAILURE:
    return state.merge(Map({
      isFetching: false,
      errors: Map({ ...action.errors }),
    }))

  /* Login */
  case types.LOGIN_REQUEST:
    return state.set("isFetching", true)
  case types.LOGIN_SUCCESS:
  case types.SET_CURRENT_USER:
    return state
      .set("isFetching", false)
      .set("data", fromJS(action.data))
  case types.LOGIN_FAILURE:
    return state
      .set("isFetching", false)
      // TODO finish this!

  /* Logout */
  case types.LOGOUT:
  case types.REMOVE_CURRENT_USER:
    return state
      .set("data", null)

  default:
    return state
  }
}

export default sessionReducer
