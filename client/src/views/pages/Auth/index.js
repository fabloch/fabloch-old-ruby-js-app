import React from "react"
import { Route } from "react-router-dom"
import { Grid } from "semantic-ui-react"

import SignupPage from "./SignupPage"
import LoginPage from "./LoginPage"

const Auth = () => (
  <Grid centered>
    <Route path="/auth/login" component={LoginPage} />
    <Route path="/auth/signup" component={SignupPage} />
  </Grid>
)

export default Auth
