import React from "react"
import { Route } from "react-router-dom"
import { Grid } from "semantic-ui-react"

import SignupPage from "./SignupPage"
import LoginPage from "./LoginPage"

const Session = () => (
  <Grid centered>
    <Route path="/session/login" component={LoginPage} />
    <Route path="/session/signup" component={SignupPage} />
  </Grid>
)

export default Session
