import React from "react"
import { Route, Switch } from "react-router-dom"

import { userIsAuthenticated, userIsNotAuthenticated, userIsAdmin } from "../../auth"

import AdminComponent from "../pages/Admin"
import MyFablabComponent from "../pages/MyFablab"
import AuthComponent from "../pages/Auth"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

// Need to apply the hocs here to avoid applying them inside the render method

const Auth = userIsNotAuthenticated(AuthComponent)
const MyFablab = userIsAuthenticated(MyFablabComponent)
const Admin = userIsAuthenticated(userIsAdmin(AdminComponent))

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth" component={Auth} />
    <Route path="/myfablab" component={MyFablab} />
    <Route path="/admin" component={Admin} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
