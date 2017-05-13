import React from "react"
import { Grid } from "semantic-ui-react"

import SignupForm from "./SignupForm"

const SignupPage = () => (
  <Grid.Column width={5} textAlign="center">
    <h1> Signup</h1>
    <SignupForm />
  </Grid.Column>
)

export default SignupPage
