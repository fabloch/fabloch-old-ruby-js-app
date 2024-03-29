const SIGNUP_REQUEST = "fab_loch/session/SIGNUP_REQUEST"
const SIGNUP_SUCCESS = "fab_loch/session/SIGNUP_SUCCESS"
const SIGNUP_FAILURE = "fab_loch/session/SIGNUP_FAILURE"

const LOGIN_REQUEST = "fab_loch/session/LOGIN_REQUEST"
const LOGIN_SUCCESS = "fab_loch/session/LOGIN_SUCCESS"
const LOGIN_FAILURE = "fab_loch/session/LOGIN_FAILURE"

const TOGGLE_EDIT_ACCOUNT = "fab_loch/session/TOGGLE_EDIT_ACCOUNT"
const UPDATE_ACCOUNT_REQUEST = "fab_loch/session/UPDATE_ACCOUNT_REQUEST"
const UPDATE_ACCOUNT_SUCCESS = "fab_loch/session/UPDATE_ACCOUNT_SUCCESS"
const UPDATE_ACCOUNT_FAILURE = "fab_loch/session/UPDATE_ACCOUNT_FAILURE"

const PASSWORD_RESET_REQUEST = "fab_loch/session/PASSWORD_RESET_REQUEST"
const PASSWORD_RESET_SUCCESS = "fab_loch/session/PASSWORD_RESET_SUCCESS"
const PASSWORD_RESET_FAILURE = "fab_loch/session/PASSWORD_RESET_FAILURE"

const SET_HEADERS_FOR_PASSWORD_RESET = "fab_loch/session/SET_HEADERS_FOR_PASSWORD_RESET"
const UPDATE_PASSWORD_REQUEST = "fab_loch/session/UPDATE_PASSWORD_REQUEST"
const UPDATE_PASSWORD_SUCCESS = "fab_loch/session/UPDATE_PASSWORD_SUCCESS"
const UPDATE_PASSWORD_FAILURE = "fab_loch/session/UPDATE_PASSWORD_FAILURE"

const SET_CURRENT_USER = "fabloch/session/SET_CURRENT_USER"
const REMOVE_CURRENT_USER = "fabloch/session/REMOVE_CURRENT_USER"

const LOGOUT = "fab_loch/session/LOGOUT"

export default {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,

  SET_CURRENT_USER,
  REMOVE_CURRENT_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  TOGGLE_EDIT_ACCOUNT,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,

  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE,

  SET_HEADERS_FOR_PASSWORD_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,

  LOGOUT,
}
