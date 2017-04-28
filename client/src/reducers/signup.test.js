import signupReducer from './signup'
import * as ActionTypes from '../actions/ActionTypes'

describe('signupReducer', () => {
  it('has a default state', () => {
    expect(
      signupReducer(undefined, {type: 'ANOTHER_ACTION'} )
    ).toEqual({})
  })

  it('handles EMAIL_SIGNUP_REQUEST', () => {
    expect(
      signupReducer(undefined, {
        type: ActionTypes.EMAIL_SIGNUP_REQUEST,
      })
    ).toEqual({
      isSigningUp: true
    })
  })

  it('handles EMAIL_SIGNUP_SUCCESS', () => {
    expect(
      signupReducer(undefined, {
        type: ActionTypes.EMAIL_SIGNUP_SUCCESS,
      })
    ).toEqual({
      isSigningUp: false,
      isSignedUp: true
    })
  })

  it('handles EMAIL_SIGNUP_FAILURE', () => {
    expect(
      signupReducer(undefined, {
        type: ActionTypes.EMAIL_SIGNUP_FAILURE,
        res
      }).toEqual(
        
      )
    )
  })
})
