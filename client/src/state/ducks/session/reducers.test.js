import { Map } from "immutable"
import * as matchers from "jest-immutable-matchers"
import sessionReducer from "./reducers"
import types from "./types"
import actions from "./actions"

describe("sessionReducer", () => {
  beforeEach(() =>
    jest.addMatchers(matchers),
  )

  describe(" default state", () => {
    it("has a default state", () => {
      expect(
        sessionReducer(undefined, { type: "ANOTHER_ACTION" }),
      ).toEqual(
        Map({
          data: null,
          isFetching: false,
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
        isFetching: true,
        fetchError: false,
      }))
    })

    it("handles SIGNUP_SUCCESS", () => {
      expect(
        sessionReducer(undefined, {
          type: types.SIGNUP_SUCCESS,
        }),
      ).toEqual(Map({
        data: null,
        isFetching: false,
        fetchError: false,
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
          isFetching: false,
          fetchError: true,
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
        isFetching: true,
        fetchError: false,
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
          isFetching: false,
          fetchError: false,
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
          isFetching: false,
          fetchError: true,
        }),
      )
    })
  })

  describe("updateAccount", () => {
    it("handles TOGGLE_EDIT false to true", () => {
      const initialState = Map({
        isEditing: false,
      })
      expect(
        sessionReducer(initialState, {
          type: types.TOGGLE_EDIT_ACCOUNT,
        }),
      ).toEqualImmutable(Map({
        isEditing: true,
      }))
    })
    it("handles TOGGLE_EDIT true to false", () => {
      const initialState = Map({
        isEditing: true,
      })
      expect(
        sessionReducer(initialState, {
          type: types.TOGGLE_EDIT_ACCOUNT,
        }),
      ).toEqualImmutable(Map({
        isEditing: false,
      }))
    })

    it("handles UPDATE_ACCOUNT_REQUEST", () => {
      expect(
        sessionReducer(undefined, {
          type: types.UPDATE_ACCOUNT_REQUEST,
        }),
      ).toEqual(Map({
        data: null,
        isFetching: true,
        fetchError: false,
      }))
    })

    it("handles UPDATE_ACCOUNT_SUCCESS", () => {
      expect(
        sessionReducer(undefined, {
          type: types.UPDATE_ACCOUNT_SUCCESS,
        }),
      ).toEqual(
        Map({
          data: null,
          isFetching: false,
          fetchError: false,
        }),
      )
    })

    it("handles UPDATE_ACCOUNT_FAILURE", () => {
      expect(
        sessionReducer(undefined, {
          type: types.UPDATE_ACCOUNT_FAILURE,
        }),
      ).toEqual(
        Map({
          data: null,
          isFetching: false,
          fetchError: true,
        }),
      )
    })
  })

  describe("passwordReset", () => {
    it("handles PASSWORD_RESET_REQUEST", () => {
      expect(
        sessionReducer(undefined, {
          type: types.PASSWORD_RESET_REQUEST,
        }),
      ).toEqual(Map({
        data: null,
        isFetching: true,
        fetchError: false,
      }))
    })

    it("handles PASSWORD_RESET_SUCCESS", () => {
      expect(
        sessionReducer(undefined, {
          type: types.PASSWORD_RESET_SUCCESS,
        }),
      ).toEqual(
        Map({
          data: null,
          isFetching: false,
          fetchError: false,
        }),
      )
    })

    it("handles PASSWORD_RESET_FAILURE", () => {
      expect(
        sessionReducer(undefined, {
          type: types.PASSWORD_RESET_FAILURE,
        }),
      ).toEqual(
        Map({
          data: null,
          isFetching: false,
          fetchError: true,
        }),
      )
    })
  })

  describe("updatePassword", () => {
    it("handles UPDATE_PASSWORD_REQUEST", () => {
      expect(
        sessionReducer(undefined, {
          type: types.UPDATE_PASSWORD_REQUEST,
        }),
      ).toEqual(Map({
        data: null,
        isFetching: true,
        fetchError: false,
      }))
    })

    it("handles UPDATE_PASSWORD_SUCCESS", () => {
      expect(
        sessionReducer(undefined, {
          type: types.UPDATE_PASSWORD_SUCCESS,
        }),
      ).toEqual(
        Map({
          data: null,
          isFetching: false,
          fetchError: false,
        }),
      )
    })

    it("handles UPDATE_PASSWORD_FAILURE", () => {
      expect(
        sessionReducer(undefined, {
          type: types.UPDATE_PASSWORD_FAILURE,
        }),
      ).toEqual(
        Map({
          data: null,
          isFetching: false,
          fetchError: true,
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
          isFetching: false,
          fetchError: false,
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
        isFetching: false,
      })
      const action = actions.removeCurrentUser()
      const nextState = Map({
        data: null,
        isFetching: false,
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
        isFetching: false,
      })
      const action = actions.logout()
      const nextState = Map({
        data: null,
        isFetching: false,
      })
      expect(sessionReducer(initialState, action)).toEqual(nextState)
    })
  })
})
