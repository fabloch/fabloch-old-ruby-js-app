import React from 'react';
import { Route, Link } from 'react-router-dom';

import SignUp from './SignUp';

const Account = () => (
  <div>
    <h1>
      Account
    </h1>
    <Link to="/account/signup">SignUp</Link>
    <Route path="/account/signup" component={SignUp} />
  </div>

);

export default Account;
