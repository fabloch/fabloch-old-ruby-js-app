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
  })

  describe("updateAccount actions", () => {
    it("toggleEditAccount", () => {
      expect(
        actions.toggleEditAccount(),
      ).toEqual(
        {
          type: types.TOGGLE_EDIT_ACCOUNT,
        },
      )
    })
    it("updateAccountRequest", () => {
      expect(
        actions.updateAccountRequest(),
      ).toEqual(
        {
          type: types.UPDATE_ACCOUNT_REQUEST,
        },
      )
    })
    it("updateAccountSuccess", () => {
      expect(
        actions.updateAccountSuccess(),
      ).toEqual(
        {
          type: types.UPDATE_ACCOUNT_SUCCESS,
        },
      )
    })
    it("updateAccountFailure", () => {
      expect(
        actions.updateAccountFailure({ response: "error" }),
      ).toEqual(
        {
          type: types.UPDATE_ACCOUNT_FAILURE,
          errors: { response: "error" },
        },
      )
    })
  })

  describe("passwordReset actions", () => {
    it("passwordResetRequest", () => {
      expect(
        actions.passwordResetRequest(),
      ).toEqual(
        {
          type: types.PASSWORD_RESET_REQUEST,
        },
      )
    })
    it("passwordResetSuccess", () => {
      expect(
        actions.passwordResetSuccess(data),
      ).toEqual(
        {
          type: types.PASSWORD_RESET_SUCCESS,
          data,
        },
      )
    })
    it("passwordResetFailure", () => {
      expect(
        actions.passwordResetFailure({ response: "error" }),
      ).toEqual(
        {
          type: types.PASSWORD_RESET_FAILURE,
          errors: { response: "error" },
        },
      )
    })
  })

  describe("updatePassword actions", () => {
    it("updatePasswordRequest", () => {
      expect(
        actions.updatePasswordRequest(),
      ).toEqual(
        {
          type: types.UPDATE_PASSWORD_REQUEST,
        },
      )
    })
    it("updatePasswordSuccess", () => {
      expect(
        actions.updatePasswordSuccess(data),
      ).toEqual(
        {
          type: types.UPDATE_PASSWORD_SUCCESS,
          data,
        },
      )
    })
    it("updatePasswordFailure", () => {
      expect(
        actions.updatePasswordFailure({ response: "error" }),
      ).toEqual(
        {
          type: types.UPDATE_PASSWORD_FAILURE,
          errors: { response: "error" },
        },
      )
    })
  })

  describe("current user actions", () => {
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
