import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

import * as types from './types'
import * as actions from './auth'

describe('authActions', () => {
  describe('setCurrentUser', () => {
    it('sends back an action with type SET_CURRENT_USER and user object', () => {
      expect(
        actions.setCurrentUser({name: 'John', email: 'john@example.com'})
      ).toEqual(
        {
          type: types.SET_CURRENT_USER,
          user: {
            name: 'John',
            email: 'john@example.com',
          }
        }
      )
    })
  })

  describe('loginRequest', () => {
    it('sends an action with type LOGIN_REQUEST', () => {
      expect(
        actions.loginRequest()
      ).toEqual(
        {
          type: types.LOGIN_REQUEST
        }
      )
    })
  })

  describe('loginSuccess', () => {
    it('sets authHeaders for axios and current user', () => {
      const store = mockStore({})

      const headers = {
        "access-token" : "BFWQiosmy3iTASScebJKwA",
        "client" : "4QwqYw_Go1einhAkTowqTQ",
        "expiry" : "1494622401",
        "uid" : "user@example.com",
      }
      store.dispatch(actions.loginSuccess(headers))

      const expectedActions = [
        {
          type: "SHOW_NOTIFICATION",
          notification: {
            body: "Enjoy your ride.",
            level: "success",
            title: "Log in successful"
          }
        },
        {
          type: types.SET_CURRENT_USER,
          user: {
              client: "4QwqYw_Go1einhAkTowqTQ",
              expiry: "1494622401",
              token: "BFWQiosmy3iTASScebJKwA",
              uid: "user@example.com"
          }
        }
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

import authReducer from './auth'
import * as types from '../actions/types'
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
