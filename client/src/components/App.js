import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import NotificationList from './Notifications/NotificationList';
import Routes from './Routes';
import Footer from './Footer';

import './App.css'

const App = () => (
  <div>
    <Router>
      <div>
        <Header />
        <NotificationList />
        <Routes />
        <Footer />
      </div>
  </Router>
  </div>
);


export default App;
