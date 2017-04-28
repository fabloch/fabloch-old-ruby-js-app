import authReducer from './auth'
import * as ActionTypes from '../actions/ActionTypes'

describe('authReducer', () => {
  it('has a default state', () => {
    expect(
      authReducer(undefined, {type: 'ANOTHER_ACTION'} )
    ).toEqual(
      {
        isAuthenticated: false,
        user: {}
      }
    )
  })

  it('handles SET_CURRENT_USER', () => {
    expect(
      authReducer(undefined, {
        type: ActionTypes.SET_CURRENT_USER,
        user: {hello: 'world'}
      })
    ).toEqual(
      {
        isAuthenticated: true,
        user: {hello: 'world'}
      }
    )
  })
})
