import { Map } from "immutable"
import signupReducer from "./reducers"
import types from "./types"

describe("signupReducer", () => {
  it("has a default state", () => {
    expect(
      signupReducer(undefined, { type: "ANOTHER_ACTION" }),
    ).toEqual(
      Map({
        isSigningUp: false,
        isSignedUp: false,
      }),
    )
  })

  it("handles REQUEST", () => {
    expect(
      signupReducer(undefined, {
        type: types.REQUEST,
      }),
    ).toEqual(Map({
      isSigningUp: true,
      isSignedUp: false,
    }))
  })

  it("handles SUCCESS", () => {
    expect(
      signupReducer(undefined, {
        type: types.SUCCESS,
      }),
    ).toEqual(Map({
      isSigningUp: false,
      isSignedUp: true,
    }))
  })

  it("handles FAILURE", () => {
    const errors = {
      email: "has already been taken",
      full_message: "Email has already been taken",
    }
    expect(
      signupReducer(undefined, {
        type: types.FAILURE,
        errors,
      }),
    ).toEqual(
      Map({
        isSigningUp: false,
        isSignedUp: false,
        errors: Map({
          email: "has already been taken",
          full_message: "Email has already been taken",
        }),
      }),
    )
  })
})
