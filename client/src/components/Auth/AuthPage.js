import React from 'react';
import { Route } from 'react-router-dom';

import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';

const Auth = () => (
  <div>
    <Route path="/account/signup" component={SignUpPage} />
    <Route path="/account/login" component={LogInPage} />
  </div>
);

export default Auth;
