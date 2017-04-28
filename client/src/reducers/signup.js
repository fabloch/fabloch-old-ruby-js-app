import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
  isSigningUp: false,
  isSignedUp: false,
}

const signupReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.EMAIL_SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true
      }
      case ActionTypes.EMAIL_SIGNUP_SUCCESS:
          return {
            ...state,
            isSigningUp: false,
            isSignedUp: true
          }
    case ActionTypes.EMAIL_SIGNUP_FAILURE:
        return {
          ...state,
          isSigningUp: false,
          isSignedUp: false,
          errors: action.errors
        }
    default:
      return state
  }
}

export default signupReducer
