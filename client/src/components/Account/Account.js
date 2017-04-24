import React from 'react';
import { Route } from 'react-router-dom';

import SignUp from './SignUp';

const Account = () => (
  <div>
    <h1>
      Account
    </h1>
    <Route path="/account/signup" component={SignUp} />
  </div>

);

export default Account;
