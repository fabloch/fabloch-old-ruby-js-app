import { Map } from "immutable"
import authReducer from "./reducers"
import types from "./types"
import actions from "./actions"

describe("authReducer", () => {
  it("has a default state", () => {
    expect(
      authReducer(undefined, { type: "ANOTHER_ACTION" }),
    ).toEqual(
      Map({
        isAuthenticated: false,
        isSigningIn: false,
      }),
    )
  })

  it("handles SET_CURRENT_USER", () => {
    expect(
      authReducer(undefined, {
        type: types.SET_CURRENT_USER,
        userData: {
          client: "abcdef",
          uid: "ghijkl",
          token: "mnopqr",
          expiry: "123456",
        },
      }),
    ).toEqual(
      Map({
        isAuthenticated: true,
        isSigningIn: false,
        userData: Map({
          client: "abcdef",
          uid: "ghijkl",
          token: "mnopqr",
          expiry: "123456",
        }),
      }),
    )
  })

  it("handles REMOVE_CURRENT_USER", () => {
    const initialState = Map({
      isAuthenticated: true,
      isSigningIn: false,
      userData: Map({
        client: "abcdef",
        uid: "ghijkl",
        token: "mnopqr",
        expiry: "123456",
      }),
    })
    const action = actions.removeCurrentUser()
    const nextState = Map({
      isAuthenticated: false,
      isSigningIn: false,
    })
    expect(authReducer(initialState, action)).toEqual(nextState)
  })

  it("handles LOGIN_REQUEST", () => {
    expect(
      authReducer(undefined, { type: types.LOGIN_REQUEST }),
    ).toEqual(
      Map({
        isAuthenticated: false,
        isSigningIn: true,
      }),
    )
  })

  it("handles LOGIN_SUCCESS", () => {
    expect(
      authReducer(undefined, {
        type: types.LOGIN_SUCCESS,
        userData: {
          client: "abcdef",
          uid: "ghijkl",
          token: "mnopqr",
          expiry: "123456",
        },
      }),
    ).toEqual(
      Map({
        isAuthenticated: true,
        isSigningIn: false,
        userData: Map({
          client: "abcdef",
          uid: "ghijkl",
          token: "mnopqr",
          expiry: "123456",
        }),
      }),
    )
  })

  xit("handles LOGIN_FAILURE", () => {
    // TODO
  })

  it("handles LOGOUT", () => {
    const initialState = Map({
      isAuthenticated: true,
      isSigningIn: false,
      userData: Map({
        client: "abcdef",
        uid: "ghijkl",
        token: "mnopqr",
        expiry: "123456",
      }),
    })
    const action = actions.logout()
    const nextState = Map({
      isAuthenticated: false,
      isSigningIn: false,
    })
    expect(authReducer(initialState, action)).toEqual(nextState)
  })

  it("handles LOGOUT", () => {
    const initialState = Map({
      isAuthenticated: true,
      isSigningIn: false,
      userData: Map({
        client: "abcdef",
        uid: "ghijkl",
        token: "mnopqr",
        expiry: "123456",
      }),
    })
    const action = actions.logout()
    const nextState = Map({
      isAuthenticated: false,
      isSigningIn: false,
    })
    expect(authReducer(initialState, action)).toEqual(nextState)
  })
})
