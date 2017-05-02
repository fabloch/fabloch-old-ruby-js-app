import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import fabLochApp from './reducers'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()

const configureStore = () => {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    fabLochApp, composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
}

export default configureStore
