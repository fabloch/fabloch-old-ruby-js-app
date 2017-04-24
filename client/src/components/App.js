import React from 'react';
// import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Account from './Account/Account';
import Footer from './Footer';
import NotFound from './NotFound';

import './App.css'

const App = () => (
  <div>
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/account" component={Account} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
  </Router>
  </div>
);


export default App;
