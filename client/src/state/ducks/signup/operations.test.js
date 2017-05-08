import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import nock from "nock"

import types from "./types"
import notificationTypes from "../notification/types"
import operations from "./operations"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

describe("signupOperations", () => {
  describe("emailSignup", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it("creates SUCCESS when valid form has been sent", () => {
      const userData = {
        email: "user@example.com",
        password: "password",
        password_confirmation: "password",
      }

      nock("http://localhost")
        .post("/auth")
        .reply(200, { body: { textStatus: "ok" } })


      const expectedActions = [
        { type: types.REQUEST },
        { type: types.SUCCESS },
        {
          type: notificationTypes.SHOW,
          notification: { body: "Account created successfully.", level: "success", title: "Account created" },
        },
      ]

      return store.dispatch(operations.emailSignup(userData))
      .then(() => { // return of async operations
        expect(store.getActions()[0]).toEqual(expectedActions[0])
        expect(store.getActions()[1]).toEqual(expectedActions[1])
        expect(store.getActions()[2]).toEqual(expectedActions[2])
      })
    })

    xit("creates a SubmissionError when user already exists", () => {
      const userData = {
        email: "user@example.com",
        password: "password",
        password_confirmation: "password",
      }

      nock("http://localhost")
        .post("/auth")
        .reply(422, { errors: { textStatus: "ok" } })


      expect.assertions(1)
      return store.dispatch(operations.emailSignup(userData)).catch(e =>
        expect(e).toEqual({
          error: "User with 2 not found.",
        }),
      )
    })
  })
})
