import { Map, fromJS } from "immutable"
import types from "./types"

const initialState = Map({
  isAuthenticated: false,
  isSigningIn: false,
})

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.LOGIN_REQUEST:
    return state
      .set("isSigningIn", true)
  case types.SET_CURRENT_USER:
  case types.LOGIN_SUCCESS:
    return state
      .merge(
        Map({
          isAuthenticated: true,
          isSigningIn: false,
          userData: fromJS(action.userData),
        }),
      )
  case types.REMOVE_CURRENT_USER:
  case types.LOGOUT:
    return state
      .set("isAuthenticated", false)
      .delete("userData")
  default:
    return state
  }
}

export default authReducer
