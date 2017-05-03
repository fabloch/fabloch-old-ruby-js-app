import { combineReducers } from 'redux';
import notifications from './notifications'
import auth from './auth'
import signup from './signup'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'

const fabLochReducer = combineReducers({
  notifications,
  auth,
  signup,
  router,
  form
});

export default fabLochReducer;
