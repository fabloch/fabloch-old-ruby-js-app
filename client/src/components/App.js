import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import FlashMessageList from './FlashMessageList';
import Routes from './Routes';
import Footer from './Footer';

import './App.css'

const App = () => (
  <div>
    <Router>
      <div>
        <Header />
        <FlashMessageList />
        <Routes />
        <Footer />
      </div>
  </Router>
  </div>
);


export default App;
