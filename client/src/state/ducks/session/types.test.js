import types from "./types"

describe("session types", () => {
  describe("signup", () => {
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
  })

  describe("login", () => {
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
  })

  describe("updateAccount", () => {
    it("TOGGLE_EDIT_ACCOUNT", () => {
      expect(
        types.TOGGLE_EDIT_ACCOUNT,
      ).toEqual(
        "fab_loch/session/TOGGLE_EDIT_ACCOUNT",
      )
    })
    it("UPDATE_ACCOUNT_REQUEST", () => {
      expect(
        types.UPDATE_ACCOUNT_REQUEST,
      ).toEqual(
        "fab_loch/session/UPDATE_ACCOUNT_REQUEST",
      )
    })
    it("UPDATE_ACCOUNT_SUCCESS", () => {
      expect(
        types.UPDATE_ACCOUNT_SUCCESS,
      ).toEqual(
        "fab_loch/session/UPDATE_ACCOUNT_SUCCESS",
      )
    })
    it("UPDATE_ACCOUNT_FAILURE", () => {
      expect(
        types.UPDATE_ACCOUNT_FAILURE,
      ).toEqual(
        "fab_loch/session/UPDATE_ACCOUNT_FAILURE",
      )
    })
  })

  describe("ask password reset", () => {
    it("PASSWORD_RESET_REQUEST", () => {
      expect(
        types.PASSWORD_RESET_REQUEST,
      ).toEqual(
        "fab_loch/session/PASSWORD_RESET_REQUEST",
      )
    })
    it("PASSWORD_RESET_SUCCESS", () => {
      expect(
        types.PASSWORD_RESET_SUCCESS,
      ).toEqual(
        "fab_loch/session/PASSWORD_RESET_SUCCESS",
      )
    })
    it("PASSWORD_RESET_FAILURE", () => {
      expect(
        types.PASSWORD_RESET_FAILURE,
      ).toEqual(
        "fab_loch/session/PASSWORD_RESET_FAILURE",
      )
    })
  })

  describe("send password reset", () => {
    it("UPDATE_PASSWORD_REQUEST", () => {
      expect(
        types.UPDATE_PASSWORD_REQUEST,
      ).toEqual(
        "fab_loch/session/UPDATE_PASSWORD_REQUEST",
      )
    })
    it("UPDATE_PASSWORD_SUCCESS", () => {
      expect(
        types.UPDATE_PASSWORD_SUCCESS,
      ).toEqual(
        "fab_loch/session/UPDATE_PASSWORD_SUCCESS",
      )
    })
    it("UPDATE_PASSWORD_FAILURE", () => {
      expect(
        types.UPDATE_PASSWORD_FAILURE,
      ).toEqual(
        "fab_loch/session/UPDATE_PASSWORD_FAILURE",
      )
    })
  })

  describe("current user", () => {
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
  })

  describe("logout", () => {
    it("LOGOUT", () => {
      expect(
        types.LOGOUT,
      ).toEqual(
        "fab_loch/session/LOGOUT",
      )
    })
  })
})
