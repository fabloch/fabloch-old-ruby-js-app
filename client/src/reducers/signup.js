import * as ActionTypes from '../actions/ActionTypes'

const signupReducer = (state = {}, action) => {
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
    default:
      return state
  }
}

export default signupReducer
