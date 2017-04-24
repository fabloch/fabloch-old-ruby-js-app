import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
    {/* <Router>
      <Route path="/" component={App} />
    </Router> */}
  </Provider>
);

export default Root;
