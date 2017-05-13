import React from "react"
import { Route, Switch } from "react-router-dom"

import { userIsAuthenticated, userIsNotAuthenticated, userIsAdmin } from "../enhancers/auth"

import AdminComponent from "../pages/Admin"
import MyFablabComponent from "../pages/MyFablab"
import SessionComponent from "../pages/Session"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

// Need to apply the hocs here to avoid applying them inside the render method

const Session = userIsNotAuthenticated(SessionComponent)
const MyFablab = userIsAuthenticated(MyFablabComponent)
const Admin = userIsAuthenticated(userIsAdmin(AdminComponent))

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/session" component={Session} />
    <Route path="/myfablab" component={MyFablab} />
    <Route path="/admin" component={Admin} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
