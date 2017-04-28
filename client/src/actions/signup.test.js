import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import axios from 'axios'

import * as ActionTypes from './ActionTypes'
import * as actions from './signup'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)


describe('signupActions', () => {
  describe('emailSignupRequest', () => {
    expect(
      actions.emailSignupRequest()
    ).toEqual(
      {
        type: ActionTypes.EMAIL_SIGNUP_REQUEST
      }
    )
  })

  describe('emailSignupFailure', () => {
    expect(
      actions.emailSignupFailure({response: "error"})
    ).toEqual(
      {
        type: ActionTypes.EMAIL_SIGNUP_FAILURE,
        res: {response: "error"}
      }
    )
  })

  describe('emailSignup', () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it('creates EMAIL_SIGNUP_SUCCESS when valid form has been sent', () => {
      const userData = {
        email: "user@example.com",
        password: "password",
        password_confirmation: "password",
      }

      nock('http://localhost')
        .post('/auth')
        .reply(200, { body: { textStatus: "ok"} })


      const expectedActions = [
        { type: ActionTypes.EMAIL_SIGNUP_REQUEST },
        {
          type: ActionTypes.SHOW_NOTIFICATION,
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
