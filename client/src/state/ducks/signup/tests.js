import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import axios from 'axios'

import * as types from './types'
import * as actions from './signup'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)


describe('signupActions', () => {
  describe('signupRequest', () => {
    expect(
      actions.signupRequest()
    ).toEqual(
      {
        type: types.SIGNUP_REQUEST
      }
    )
  })

  describe('signupFailure', () => {
    expect(
      actions.signupFailure({response: "error"})
    ).toEqual(
      {
        type: types.SIGNUP_FAILURE,
        res: {response: "error"}
      }
    )
  })

  describe('emailSignup', () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it('creates SIGNUP_SUCCESS when valid form has been sent', () => {
      const userData = {
        email: "user@example.com",
        password: "password",
        password_confirmation: "password",
      }

      nock('http://localhost')
        .post('/auth')
        .reply(200, { body: { textStatus: "ok"} })


      const expectedActions = [
        { type: types.SIGNUP_REQUEST },
        {
          type: types.SHOW_NOTIFICATION,
          notification: {"body": "Account created successfully.", "level": "success", "title": "Account created"}
        }
      ]
      const store = mockStore({})

      return store.dispatch(actions.emailSignup(userData))
      .then(() => { // return of async actions
        expect(store.getActions()[0]).toEqual(expectedActions[0])
        expect(store.getActions()[1]).toEqual(expectedActions[1])
      })
    })
  })
})

import signupReducer from './signup'
import * as types from '../actions/types'

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

  it('handles SIGNUP_REQUEST', () => {
    expect(
      signupReducer(undefined, {
        type: types.SIGNUP_REQUEST,
      })
    ).toEqual({
      isSigningUp: true,
      isSignedUp: false,
    })
  })

  it('handles SIGNUP_SUCCESS', () => {
    expect(
      signupReducer(undefined, {
        type: types.SIGNUP_SUCCESS,
      })
    ).toEqual({
      isSigningUp: false,
      isSignedUp: true,
    })
  })

  it('handles SIGNUP_FAILURE', () => {
    const errors = {
      email: "has already been taken",
      full_message: "Email has already been taken",
    }
    expect(
      signupReducer(undefined, {
        type: types.SIGNUP_FAILURE,
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
