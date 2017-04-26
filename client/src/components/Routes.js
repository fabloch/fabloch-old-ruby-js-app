import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Account from './Account/Account';
import Members from './Members';
import NotFound from './NotFound';
import requireAuth from '../utils/requireAuth'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/account" component={Account} />
    <Route path="/membres" component={requireAuth(Members)} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes;
