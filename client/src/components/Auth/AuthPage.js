import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';

const Auth = () => (
  <Grid centered>
    <Route path="/account/signup" component={SignUpPage} />
    <Route path="/account/login" component={LogInPage} />
  </Grid>
);

export default Auth;
