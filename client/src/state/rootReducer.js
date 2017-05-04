import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"
import { reducer as form } from "redux-form"

import * as reducers from "./ducks"

const rootReducer = combineReducers({
  ...reducers,
  router,
  form,
})

export default rootReducer
