import { combineReducers } from 'redux';
import flashMessages from './flashMessages'
import auth from './auth'

const fabLochReducer = combineReducers({
  flashMessages,
  auth,
});

export default fabLochReducer;
