import * as types from "./types"

const initialState = {
  isSigningUp: false,
  isSignedUp: false,
}

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SIGNUP_REQUEST:
    return {
      ...state,
      isSigningUp: true,
    }
  case types.SIGNUP_SUCCESS:
    return {
      ...state,
      isSigningUp: false,
      isSignedUp: true,
    }
  case types.SIGNUP_FAILURE:
    return {
      ...state,
      isSigningUp: false,
      isSignedUp: false,
      errors: action.errors,
    }
  default:
    return state
  }
}

export default signupReducer
