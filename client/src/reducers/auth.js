import { SET_CURRENT_USER } from '../actions/ActionTypes'
import isEmpty from 'lodash/isEmpty'
import { Map, fromJS } from 'immutable'

const initialState = Map({
  isAuthenticated: false,
  user: Map({})
})

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return state
        .merge(
          Map({
            isAuthenticated: !isEmpty(action.user),
            user: fromJS(action.user)
          })
        )
        // .set('isAuthenticated', !isEmpty(action.user))
        // .set('user', fromJS(action.user))

    default:
      return state
  }
}

export default authReducer;
