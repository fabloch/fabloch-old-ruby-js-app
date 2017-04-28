import shortid from 'shortid';
import * as ActionTypes from '../actions/ActionTypes';
import findIndex from 'lodash/findIndex';

const notifications = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.SHOW_NOTIFICATION:
      return [
        ...state,
        {
          id: shortid.generate(),
          level: action.notification.level,
          title: action.notification.title,
          body: action.notification.body
        }
      ]
    case ActionTypes.HIDE_NOTIFICATION:
      const index = findIndex(state, {id: action.id})
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      }
      return state
    default:
      return state
  }
};

export default notifications;
