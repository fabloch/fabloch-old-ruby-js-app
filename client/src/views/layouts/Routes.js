import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import AuthPage from "../pages/Auth"
import Members from "../pages/Members"
import NotFound from "../pages/NotFound"
import requireAuth from "../hoc/requireAuth"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/account" component={AuthPage} />
    <Route path="/membres" component={requireAuth(Members)} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
