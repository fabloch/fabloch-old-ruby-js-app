import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import * as reducers from "./ducks"

import * as notificationSelectors from "./ducks/notification/selectors"

const rootReducer = combineReducers({
  ...reducers,
  form,
})

export default rootReducer

export const getHighLightNotifications = state =>
  notificationSelectors.getHighLightNotifications(state.notification)
