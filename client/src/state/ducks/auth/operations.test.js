import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import nock from "nock"
import mockLocalStorage from "../utils/mockLocalStorage"

import operations from "./operations"
import types from "./types"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

mockLocalStorage()

describe("authOperations", () => {
  describe("setCurrentUser", () => {
    expect(
      operations.setCurrentUser({ name: "John" }),
    ).toEqual(
      {
        type: types.SET_CURRENT_USER,
        userData: { name: "John" },
      },
    )
  })

  describe("login", () => {
    afterEach(() => {
      nock.cleanAll()
    })

    it("sets authHeaders for axios and current user", () => {
      const store = mockStore({})
      const userData = {
        email: "user@example.com",
        password: "password",
      }

      nock("http://localhost")
      .post("/auth/sign_in")
      .reply(
        200,
        {
          textStatus: "ok",
        },
        {
          client: "abcdef",
          uid: "ghijkl",
          "access-token": "mnopqr",
          expiry: "123456",
        },
      )

      const expectedActions = [
        { type: "fabloch/auth/LOGIN_REQUEST" },
        {
          type: "fabloch/auth/LOGIN_SUCCESS",
          userData: {
            client: "abcdef",
            uid: "ghijkl",
            token: "mnopqr",
            expiry: "123456",
          },
        },
        {
          type: "fab_loch/notification/SHOW",
          notification: {
            level: "success",
            title: "Log in successful",
            body: "Enjoy your ride.",
          },
        },
      ]

      return store.dispatch(operations.login(userData))
      .then(() => { // return of async operations
        expect(store.getActions()[0]).toEqual(expectedActions[0])
        expect(store.getActions()[1]).toEqual(expectedActions[1])
        expect(store.getActions()[2]).toEqual(expectedActions[2])
      })
    })
  })

  describe("logout", () => {
    it("sends logout action", () => {
      const store = mockStore({})
      const expectedActions = [
        { type: types.LOGOUT },
        {
          type: types.SET_CURRENT_USER,
          userData: {
          },
        },
      ]

      store.dispatch(operations.logout())
      expect(store.getActions()[0]).toEqual(expectedActions[0])
      expect(store.getActions()[1]).toEqual(expectedActions[1])
    })
  })
})
