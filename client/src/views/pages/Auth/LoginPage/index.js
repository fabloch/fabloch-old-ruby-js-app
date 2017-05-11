import React from "react"
import { Grid } from "semantic-ui-react"

import LoginForm from "./LoginForm"

const LoginPage = () => (
  <Grid.Column width={5} textAlign="center">
    <h1>Login</h1>
    <LoginForm />
  </Grid.Column>
)


export default LoginPage
