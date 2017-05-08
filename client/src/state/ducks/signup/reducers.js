import { Map } from "immutable"
import types from "./types"

const initialState = Map({
  isSigningUp: false,
  isSignedUp: false,
})

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.REQUEST:
    return state.set("isSigningUp", true)

  case types.SUCCESS:
    return state.merge(Map({ isSigningUp: false, isSignedUp: true }))

  case types.FAILURE:
    return state.merge(Map({
      isSigningUp: false,
      isSignedUp: false,
      errors: Map({ ...action.errors }),
    }))
    //   isSigningUp: false,
    //   isSignedUp: false,
    //   errors: action.errors,
    // }
  default:
    return state
  }
}

export default signupReducer
