import { Map } from "immutable"
import authReducer from "./reducers"
import types from "./types"

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
        authHeaders: {
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
        user: Map({
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
})
