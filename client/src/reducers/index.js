import { combineReducers } from 'redux';
import notifications from './notifications'
import auth from './auth'
import signup from './signup'
import { routerReducer as router } from 'react-router-redux'

const fabLochReducer = combineReducers({
  notifications,
  auth,
  signup,
  router
});

export default fabLochReducer;
