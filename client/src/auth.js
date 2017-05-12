import locationHelperBuilder from "redux-auth-wrapper/lib/history4/locationHelper"
import { connectedRouterRedirect } from "redux-auth-wrapper/lib/history4/redirect"

import Loading from "./views/components/Loading"

const locationHelper = locationHelperBuilder({})

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: "/account/login",
  authSelector: state => state.auth.userData,
  authenticatingSelector: state => state.auth.isSigningIn,
  AuthenticatingComponent: Loading,
  wrapperDisplayName: "UserIsAuthenticated",
})

export const userIsAdmin = connectedRouterRedirect({
  redirectPath: "/",
  allowRedirectBack: false,
  authSelector: state => state.auth.userData,
  predicate: user => user.isAdmin,
  wrapperDisplayName: "UserIsAdmin",
})

export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQuery(ownProps) || "/",
  allowRedirectBack: false,
  authSelector: state => state.auth,
  // Want to redirect the user when they are done loading and authenticated
  predicate: auth => auth.userData === null && auth.isSigningIn === false,
  wrapperDisplayName: "UserIsNotAuthenticated",
})
