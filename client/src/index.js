import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = configureStore();
render(
  <Root store={store} />,
  document.getElementById('root')
);
