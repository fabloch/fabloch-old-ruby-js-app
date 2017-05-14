import React from "react"
import { Route, Switch } from "react-router-dom"

import { userIsAuthenticated, userIsNotAuthenticated, userIsAdmin } from "../enhancers/auth"

import HomePage from "../pages/Home"
import Admin from "../pages/Admin"
import MyFablab from "../pages/MyFablab"
import Session from "../pages/Session"
import Profile from "../pages/Profile"
import NotFoundPage from "../pages/NotFound"

// Need to apply the hocs here to avoid applying them inside the render method

const SessionPage = userIsNotAuthenticated(Session)
const MyFablabPage = userIsAuthenticated(MyFablab)
const AdminPage = userIsAuthenticated(userIsAdmin(Admin))
const ProfilePage = userIsAuthenticated(Profile)

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/session" component={SessionPage} />
    <Route path="/myfablab" component={MyFablabPage} />
    <Route path="/admin" component={AdminPage} />
    <Route path="/profile" component={ProfilePage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
