import React from 'react';
// import React, { PropTypes } from 'react';
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

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// };

export default Root;
