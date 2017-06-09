import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import { userIsAuthenticated, userIsNotAuthenticated, userIsAdmin } from "../enhancers/auth"

import HomePage from "../pages/Home"
import ThePlace from "../pages/ThePlace"
import Projects from "../pages/Projects"
import Members from "../pages/Members"
import Documentation from "../pages/Documentation"

import MyFablab from "../pages/MyFablab"
import Calendar from "../pages/Calendar"
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
export const CALENDAR = "/calendrier"
export const DASHBOARD = "/dashboard"
export const SUBSCRIBE = "/subscribe"

export const SESSION = "/session"
export const LOGIN = "/session/login"
export const SIGNUP = "/session/signup"
export const FORGOT_PASSWORD = "/session/mot-de-passe-oublie"
export const RESET_PASSWORD = "/session/reinitialiser-mon-mot-de-passe"
export const LOGOUT = "/session/logout"
export const ADMIN = "/admin"

export const RESET_PWD_LINK = "/auth/password/edit"
// Need to apply the hocs here to avoid applying them inside the render method
const SessionPage = userIsNotAuthenticated(Session)
const MyFablabPage = userIsAuthenticated(MyFablab)
const CalendarPage = userIsAuthenticated(Calendar)
const AdminPage = userIsAuthenticated(userIsAdmin(Admin))
const DashboardPage = userIsAuthenticated(Dashboard)
const SubscribePage = userIsAuthenticated(Subscribe)

const Routes = () => (
  <Switch>
    <Route
      path="/auth/password/edit"
      render={({ location }) => {
        console.log(location)
        return (
          <Redirect to={RESET_PASSWORD + location.search} />
        )
      }}
    />

    <Route exact path="/" component={HomePage} />
    <Route path={THE_PLACE} component={ThePlace} />
    <Route path={PROJECTS} component={Projects} />
    <Route path={MEMBERS} component={Members} />
    <Route path={DOCUMENTATION} component={Documentation} />

    <Route path={MY_FABLAB} component={MyFablabPage} />
    <Route path={CALENDAR} component={CalendarPage} />
    <Route path={DASHBOARD} component={DashboardPage} />
    <Route path={SUBSCRIBE} component={SubscribePage} />
    <Route path={SESSION} component={SessionPage} />
    <Route component={NotFoundPage} />
    <Route path={ADMIN} component={AdminPage} />
  </Switch>
)

export default Routes
