import shortid from 'shortid';
import * as ActionTypes from '../actions/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  highlight: Map({}),
  history: Map({})
})

const notifications = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SHOW_NOTIFICATION:
      const new_id = shortid.generate()
      return state.setIn(
        ['highlight', new_id],
        Map({
          level: action.notification.level,
          title: action.notification.title,
          body: action.notification.body
        })
      )

    case ActionTypes.HIDE_NOTIFICATION:
      return state
        .setIn(
          ['history', action.id],
          state.getIn(['highlight', action.id])
        )
        .deleteIn(['highlight', action.id])
    default:
      return state
  }
};

export default notifications;
