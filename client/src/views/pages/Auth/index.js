import React from "react"
import { Route } from "react-router-dom"
import { Grid } from "semantic-ui-react"

import SignupPage from "./SignupPage"
import LoginPage from "./LoginPage"
import { userIsNotAuthenticated } from "../../../auth"

const Auth = () => (
  <Grid centered>
    <Route path="/account/signup" component={userIsNotAuthenticated(SignupPage)} />
    <Route path="/account/login" component={userIsNotAuthenticated(LoginPage)} />
  </Grid>
)

export default Auth
