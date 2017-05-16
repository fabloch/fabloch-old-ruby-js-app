import { combineReducers } from "redux"
import { reducer as form } from "redux-form"
import { routerReducer as router } from "react-router-redux"

import * as reducers from "./ducks"

import notificationSelectors from "./ducks/notification/selectors"
import profileSelectors from "./ducks/profile/selectors"

const rootReducer = combineReducers({
  ...reducers,
  form,
  router,
})

export default rootReducer

export const getHighLightNotifications = state =>
  notificationSelectors.getHighLightNotifications(state.notification)

export const getProfileData = state =>
  profileSelectors.getProfileData(state.profile)
