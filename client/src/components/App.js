import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../configureStore'
import { Container } from 'semantic-ui-react'
import Navbar from './Navbar';
import NotificationList from './Notifications/NotificationList';
import Routes from './Routes';
import Footer from './Footer';

import './App.css'

const App = () => (
  <div>
    <ConnectedRouter history={history}>
      <div>
        <Navbar />
        <NotificationList />
        <Container>
          <Routes />
        </Container>
        <Footer />
      </div>
  </ConnectedRouter>
  </div>
);


export default App;
