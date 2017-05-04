import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware } from "react-router-redux"
import createHistory from "history/createBrowserHistory"

import reducers from "./rootReducer"

export const history = createHistory()

const configureStore = () => {
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ]
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger())
  }

  return createStore(
    reducers, composeWithDevTools(applyMiddleware(...middlewares)),
  )
}

export default configureStore
