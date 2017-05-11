import types from "./types"
import actions from "./actions"

describe("authActions", () => {
  it("setCurrentUser", () => {
    expect(
      actions.setCurrentUser({ name: "John", email: "john@example.com" }),
    ).toEqual(
      {
        type: types.SET_CURRENT_USER,
        userData: {
          name: "John",
          email: "john@example.com",
        },
      },
    )
  })

  it("loginRequest", () => {
    expect(
      actions.loginRequest(),
    ).toEqual(
      {
        type: types.LOGIN_REQUEST,
      },
    )
  })

  it("loginSuccess", () => {
    const userData = {
      accessToken: "BFWQiosmy3iTASScebJKwA",
      client: "4QwqYw_Go1einhAkTowqTQ",
      expiry: "1494622401",
      uid: "user@example.com",
    }
    expect(
      actions.loginSuccess(userData),
    ).toEqual(
      {
        type: types.LOGIN_SUCCESS,
        userData,
      },
    )
  })

  it("loginFailure", () => {
    expect(
      actions.loginFailure({ response: "error" }),
    ).toEqual(
      {
        type: types.LOGIN_FAILURE,
        errors: { response: "error" },
      },
    )
  })

  it("logout", () => {
    expect(
      actions.logout(),
    ).toEqual(
      {
        type: types.LOGOUT,
      },
    )
  })
})
