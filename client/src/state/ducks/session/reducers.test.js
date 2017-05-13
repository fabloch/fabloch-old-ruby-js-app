import { Map } from "immutable"
import sessionReducer from "./reducers"
import types from "./types"
import actions from "./actions"

describe("sessionReducer", () => {
  describe(" default state", () => {
    it("has a default state", () => {
      expect(
        sessionReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqual(
        Map({
          data: null,
          isLoading: false,
        }),
      )
    })
  })

  describe("signup", () => {
    it("handles SIGNUP_REQUEST", () => {
      expect(
        sessionReducer(undefined, {
          type: types.SIGNUP_REQUEST,
        }),
      ).toEqual(Map({
        data: null,
        isLoading: true,
      }))
    })

    it("handles SIGNUP_SUCCESS", () => {
      expect(
        sessionReducer(undefined, {
          type: types.SIGNUP_SUCCESS,
        }),
      ).toEqual(Map({
        data: null,
        isLoading: false,
      }))
    })

    it("handles SIGNUP_FAILURE", () => {
      const errors = {
        email: "has already been taken",
        full_message: "Email has already been taken",
      }
      expect(
        sessionReducer(undefined, {
          type: types.SIGNUP_FAILURE,
          errors,
        }),
      ).toEqual(
        Map({
          data: null,
          isLoading: false,
          errors: Map({
            email: "has already been taken",
            full_message: "Email has already been taken",
          }),
        }),
      )
    })
  })

  describe("login", () => {
    it("handles LOGIN_REQUEST", () => {
      expect(
        sessionReducer(undefined, {
          type: types.LOGIN_REQUEST,
        }),
      ).toEqual(Map({
        data: null,
        isLoading: true,
      }))
    })

    it("handles LOGIN_SUCCESS", () => {
      expect(
        sessionReducer(undefined, {
          type: types.LOGIN_SUCCESS,
          data: {
            client: "abcdef",
            uid: "ghijkl",
            token: "mnopqr",
            expiry: "123456",
          },
        }),
      ).toEqual(
        Map({
          data: Map({
            client: "abcdef",
            uid: "ghijkl",
            token: "mnopqr",
            expiry: "123456",
          }),
          isLoading: false,
        }),
      )
    })

    it("handles LOGIN_FAILURE", () => {
      expect(
        sessionReducer(undefined, {
          type: types.LOGIN_FAILURE,
        }),
      ).toEqual(
        Map({
          data: null,
          isLoading: false,
        }),
      )
    })
  })

  describe("current user", () => {
    it("handles SET_CURRENT_USER", () => {
      expect(
        sessionReducer(undefined, {
          type: types.SET_CURRENT_USER,
          data: {
            client: "abcdef",
            uid: "ghijkl",
            token: "mnopqr",
            expiry: "123456",
          },
        }),
      ).toEqual(
        Map({
          data: Map({
            client: "abcdef",
            uid: "ghijkl",
            token: "mnopqr",
            expiry: "123456",
          }),
          isLoading: false,
        }),
      )
    })

    it("handles REMOVE_CURRENT_USER", () => {
      const initialState = Map({
        data: Map({
          client: "abcdef",
          uid: "ghijkl",
          token: "mnopqr",
          expiry: "123456",
        }),
        isLoading: false,
      })
      const action = actions.removeCurrentUser()
      const nextState = Map({
        data: null,
        isLoading: false,
      })
      expect(sessionReducer(initialState, action)).toEqual(nextState)
    })
  })

  describe("logout", () => {
    it("handles LOGOUT", () => {
      const initialState = Map({
        data: Map({
          client: "abcdef",
          uid: "ghijkl",
          token: "mnopqr",
          expiry: "123456",
        }),
        isLoading: false,
      })
      const action = actions.logout()
      const nextState = Map({
        data: null,
        isLoading: false,
      })
      expect(sessionReducer(initialState, action)).toEqual(nextState)
    })
  })
})
