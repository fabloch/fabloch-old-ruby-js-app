import types from "./types"

describe("session types", () => {
  it("SIGNUP_REQUEST", () => {
    expect(
      types.SIGNUP_REQUEST,
    ).toEqual(
      "fab_loch/session/SIGNUP_REQUEST",
    )
  })
  it("SIGNUP_SUCCESS", () => {
    expect(
      types.SIGNUP_SUCCESS,
    ).toEqual(
      "fab_loch/session/SIGNUP_SUCCESS",
    )
  })
  it("SIGNUP_FAILURE", () => {
    expect(
      types.SIGNUP_FAILURE,
    ).toEqual(
      "fab_loch/session/SIGNUP_FAILURE",
    )
  })
  it("LOGIN_REQUEST", () => {
    expect(
      types.LOGIN_REQUEST,
    ).toEqual(
      "fab_loch/session/LOGIN_REQUEST",
    )
  })
  it("LOGIN_SUCCESS", () => {
    expect(
      types.LOGIN_SUCCESS,
    ).toEqual(
      "fab_loch/session/LOGIN_SUCCESS",
    )
  })
  it("LOGIN_FAILURE", () => {
    expect(
      types.LOGIN_FAILURE,
    ).toEqual(
      "fab_loch/session/LOGIN_FAILURE",
    )
  })
  it("SET_CURRENT_USER", () => {
    expect(
      types.SET_CURRENT_USER,
    ).toEqual(
      "fabloch/session/SET_CURRENT_USER",
    )
  })
  it("REMOVE_CURRENT_USER", () => {
    expect(
      types.REMOVE_CURRENT_USER,
    ).toEqual(
      "fabloch/session/REMOVE_CURRENT_USER",
    )
  })
  it("LOGOUT", () => {
    expect(
      types.LOGOUT,
    ).toEqual(
      "fab_loch/session/LOGOUT",
    )
  })
})
