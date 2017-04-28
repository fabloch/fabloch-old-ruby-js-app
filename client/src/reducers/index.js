import { combineReducers } from 'redux';
import notifications from './notifications'
import auth from './auth'
import signup from './signup'

const fabLochReducer = combineReducers({
  notifications,
  auth,
  signup,
});

export default fabLochReducer;
