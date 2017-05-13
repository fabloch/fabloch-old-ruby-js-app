import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import * as reducers from "./ducks"

const rootReducer = combineReducers({
  ...reducers,
  form,
})

export default rootReducer
