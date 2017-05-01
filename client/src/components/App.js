import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Navbar from './Navbar';
import NotificationList from './Notifications/NotificationList';
import Routes from './Routes';
import Footer from './Footer';

import './App.css'

const App = () => (
  <div>
    <Router>
      <div>
        <Navbar />
        <NotificationList />
        <Container>
          <Routes />
        </Container>
        <Footer />
      </div>
  </Router>
  </div>
);


export default App;
