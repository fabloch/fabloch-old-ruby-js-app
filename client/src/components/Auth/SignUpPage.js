import React from 'react';
import { Grid } from 'semantic-ui-react'

import SignUpForm from './SignUpForm';

const SignUpPage = () => (
  <Grid.Column width={5} textAlign="center">
    <h1> SignUp</h1>
    <SignUpForm />
  </Grid.Column>
)

export default SignUpPage;
