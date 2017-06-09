import { Map, fromJS } from "immutable"
import types from "./types"

const initialState = Map({
  data: null,
  isFetching: false,
})

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {

  case types.SIGNUP_REQUEST:
  case types.LOGIN_REQUEST:
  case types.UPDATE_ACCOUNT_REQUEST:
  case types.PASSWORD_RESET_REQUEST:
  case types.UPDATE_PASSWORD_REQUEST:
    return state
      .set("isFetching", true)
      .set("fetchError", false)

  case types.SIGNUP_SUCCESS:
  case types.UPDATE_ACCOUNT_SUCCESS:
  case types.PASSWORD_RESET_SUCCESS:
  case types.UPDATE_PASSWORD_SUCCESS:
    return state
      .set("isFetching", false)
      .set("fetchError", false)

  case types.SIGNUP_FAILURE:
  case types.LOGIN_FAILURE:
  case types.UPDATE_ACCOUNT_FAILURE:
  case types.PASSWORD_RESET_FAILURE:
  case types.UPDATE_PASSWORD_FAILURE:
    return state
      .set("isFetching", false)
      .set("fetchError", true)

  case types.LOGIN_SUCCESS:
  case types.SET_CURRENT_USER:
    return state
      .set("isFetching", false)
      .set("fetchError", false)
      .set("data", fromJS(action.data))


  case types.TOGGLE_EDIT_ACCOUNT:
    return state
      .set("isEditing", !state.get("isEditing"))


  case types.LOGOUT:
  case types.REMOVE_CURRENT_USER:
    return state
      .set("data", null)

  case types.SET_HEADERS_FOR_PASSWORD_RESET:
    return state
      .set("passwordResetData", action.data)

  default:
    return state
  }
}

export default sessionReducer
