import types from "./types"
import actions from "./actions"

const data = {
  accessToken: "BFWQiosmy3iTASScebJKwA",
  client: "4QwqYw_Go1einhAkTowqTQ",
  expiry: "1494622401",
  uid: "user@example.com",
}

describe("sessionActions", () => {
  describe("signup actions", () => {
    it("signupRequest", () => {
      expect(
        actions.signupRequest(),
      ).toEqual(
        {
          type: types.SIGNUP_REQUEST,
        },
      )
    })

    it("signupSuccess", () => {
      expect(
        actions.signupSuccess(),
      ).toEqual(
        {
          type: types.SIGNUP_SUCCESS,
        },
      )
    })

    it("signupFailure", () => {
      expect(
        actions.signupFailure({ response: "error" }),
      ).toEqual(
        {
          type: types.SIGNUP_FAILURE,
          errors: { response: "error" },
        },
      )
    })
  })

  describe("login actions", () => {
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
      expect(
        actions.loginSuccess(data),
      ).toEqual(
        {
          type: types.LOGIN_SUCCESS,
          data,
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

    it("setCurrentUser", () => {
      expect(
        actions.setCurrentUser(data),
      ).toEqual(
        {
          type: types.SET_CURRENT_USER,
          data,
        },
      )
    })

    it("removeCurrentUser", () => {
      expect(
        actions.removeCurrentUser(),
      ).toEqual(
        {
          type: types.REMOVE_CURRENT_USER,
        },
      )
    })
  })

  describe("logout actions", () => {
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
})
