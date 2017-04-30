import authReducer from './auth'
import * as ActionTypes from '../actions/ActionTypes'
import * as actions from '../actions/auth'
import { Map } from 'immutable'

describe('authReducer', () => {
  it('has a default state', () => {
    expect(
      authReducer(undefined, {type: 'ANOTHER_ACTION'} )
    ).toEqual(
      Map({
        isAuthenticated: false,
        user: Map({})
      })
    )
  })

  it('handles SET_CURRENT_USER', () => {
    const initialState = undefined
    const action = actions.setCurrentUser({hello: 'world'})
    const nextState = Map({
      isAuthenticated: true,
      user: Map({hello: 'world'})
    })
    expect(
      authReducer(initialState, action)
    ).toEqual(
      nextState
    )
  })
})
