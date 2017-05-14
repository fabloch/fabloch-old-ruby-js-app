import locationHelperBuilder from "redux-auth-wrapper/lib/history4/locationHelper"
import { connectedRouterRedirect } from "redux-auth-wrapper/lib/history4/redirect"

import Loading from "../pages/Loading"

const locationHelper = locationHelperBuilder({})

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: "/session/login",
  authSelector: state => state.session.get("data"),
  authenticatingSelector: state => state.session.get("isLoading"),
  AuthenticatingComponent: Loading,
  wrapperDisplayName: "UserIsAuthenticated",
})

export const userIsAdmin = connectedRouterRedirect({
  redirectPath: "/",
  allowRedirectBack: false,
  authSelector: state => state.session.get("data"),
  predicate: user => user.get("isAdmin"),
  wrapperDisplayName: "UserIsAdmin",
})

export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQuery(ownProps) || "/session/login",
  allowRedirectBack: false,
  authSelector: state => state.session.toJS(),
  // Want to redirect the user when they are authenticated
  predicate: session => session.data === null,
  wrapperDisplayName: "UserIsNotAuthenticated",
})
