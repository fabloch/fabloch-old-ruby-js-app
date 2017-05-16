import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware } from "react-router-redux"
import history from "./history"

import reducers from "."
const router = routerMiddleware(history)

const configureStore = () => {
  const middlewares = [
    thunk,
    router,
  ]
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger())
  }

  return createStore(
    reducers, composeWithDevTools(applyMiddleware(...middlewares)),
  )
}

export default configureStore
