import shortid from 'shortid';
import * as ActionTypes from '../actions/ActionTypes';
import findIndex from 'lodash/findIndex';

const initialState = {
  highlight: [],
  history: []
}

const notifications = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SHOW_NOTIFICATION:
      const new_id = shortid.generate()
      return {
        ...state,
        highlight.push(
          {
            id: new_id,
            level: action.notification.level,
            title: action.notification.title,
            body: action.notification.body
          }
        )
      }
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
