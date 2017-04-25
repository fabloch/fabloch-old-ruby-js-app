import { combineReducers } from 'redux';
import flashMessages from './flashMessages'

const fabLochReducer = combineReducers({
  flashMessages,
});

export default fabLochReducer;
