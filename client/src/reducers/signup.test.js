import signupReducer from './signup'
import * as ActionTypes from '../actions/ActionTypes'

describe('signupReducer', () => {
  it('has a default state', () => {
    expect(
      signupReducer(undefined, {type: 'ANOTHER_ACTION'} )
    ).toEqual(
      {
        isSigningUp: false,
        isSignedUp: false,
      }
    )
  })

  it('handles EMAIL_SIGNUP_REQUEST', () => {
    expect(
      signupReducer(undefined, {
        type: ActionTypes.EMAIL_SIGNUP_REQUEST,
      })
    ).toEqual({
      isSigningUp: true,
      isSignedUp: false,
    })
  })

  it('handles EMAIL_SIGNUP_SUCCESS', () => {
    expect(
      signupReducer(undefined, {
        type: ActionTypes.EMAIL_SIGNUP_SUCCESS,
      })
    ).toEqual({
      isSigningUp: false,
      isSignedUp: true,
    })
  })

  it('handles EMAIL_SIGNUP_FAILURE', () => {
    const errors = {
      email: "has already been taken",
      full_message: "Email has already been taken",
    }
    expect(
      signupReducer(undefined, {
        type: ActionTypes.EMAIL_SIGNUP_FAILURE,
        errors
      })
    ).toEqual({
      isSigningUp: false,
      isSignedUp: false,
      errors: {
        email: "has already been taken",
        full_message: "Email has already been taken",
      }
    })
  })
})
