import React from "react"
import { Route, Switch } from "react-router-dom"

import { userIsAuthenticated, userIsNotAuthenticated, userIsAdmin } from "../enhancers/auth"

import HomePage from "../pages/Home"
import ThePlace from "../pages/ThePlace"
import Projects from "../pages/Projects"
import Members from "../pages/Members"
import Documentation from "../pages/Documentation"

import MyFablab from "../pages/MyFablab"
import Dashboard from "../pages/Dashboard"
import Subscribe from "../pages/Subscribe"

import Session from "../pages/Session"
import Admin from "../pages/Admin"
import NotFoundPage from "../pages/NotFound"

export const THE_PLACE = "/le-lieu"
export const PROJECTS = "/les-projets"
export const MEMBERS = "/les-membres"
export const DOCUMENTATION = "/la-doc"

export const MY_FABLAB = "/myfablab"
export const DASHBOARD = "/dashboard"
export const SUBSCRIBE = "/subscribe"

export const SESSION = "/session"
export const LOGIN = "/session/login"
export const SIGNUP = "/session/signup"
export const FORGOT_PASSWORD = "/session/mot-de-passe-oublie"
export const LOGOUT = "/session/logout"
export const ADMIN = "/admin"

// Need to apply the hocs here to avoid applying them inside the render method
const SessionPage = userIsNotAuthenticated(Session)
const MyFablabPage = userIsAuthenticated(MyFablab)
const AdminPage = userIsAuthenticated(userIsAdmin(Admin))
const DashboardPage = userIsAuthenticated(Dashboard)
const SubscribePage = userIsAuthenticated(Subscribe)

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path={THE_PLACE} component={ThePlace} />
    <Route path={PROJECTS} component={Projects} />
    <Route path={MEMBERS} component={Members} />
    <Route path={DOCUMENTATION} component={Documentation} />

    <Route path={MY_FABLAB} component={MyFablabPage} />
    <Route path={DASHBOARD} component={DashboardPage} />
    <Route path={SUBSCRIBE} component={SubscribePage} />
    <Route path={SESSION} component={SessionPage} />
    <Route component={NotFoundPage} />
    <Route path={ADMIN} component={AdminPage} />
  </Switch>
)

export default Routes
