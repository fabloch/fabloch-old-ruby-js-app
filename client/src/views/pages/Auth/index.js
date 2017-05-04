import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

const Auth = () => (
  <Grid centered>
    <Route path="/account/signup" component={SignupPage} />
    <Route path="/account/login" component={LoginPage} />
  </Grid>
);

export default Auth;
