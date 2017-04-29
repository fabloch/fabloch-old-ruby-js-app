import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as ActionTypes from './ActionTypes'
import * as actions from './notifications'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const notification = {
  id: "some_id",
  level: "success",
  title: "Login successful",
  body: "Login was successful",
}

describe('showNotification action', () => {
  it('returns action with type and notification', () => {
    expect(
      actions.showNotification(notification)
    ).toEqual(
      {
        type: ActionTypes.SHOW_NOTIFICATION,
        notification
      }
    )
  })
})

describe('hideNotification action', () => {
  it('returns action with type and notification', () => {
    expect(
      actions.hideNotification("some_id")
    ).toEqual(
      {
        type: ActionTypes.HIDE_NOTIFICATION,
        id: "some_id"
      }
    )
  })
})

describe('deleteNotification action', () => {
  it('returns action with type and notification', () => {
    expect(
      actions.deleteNotification("some_id")
    ).toEqual(
      {
        type: ActionTypes.DELETE_NOTIFICATION,
        id: "some_id"
      }
    )
  })
})

describe('addNotification action', () => {
  it('creates showNotification action and then hideNotification action', () => {
    jest.useFakeTimers()

    const expectedActions = [
      { type: ActionTypes.SHOW_NOTIFICATION, notification },
      { type: ActionTypes.HIDE_NOTIFICATION, id: notification.id }
    ]

    const store = mockStore({})

    store.dispatch(actions.addNotification(notification))

    jest.runAllTimers()

    expect(store.getActions()).toEqual(expectedActions)
  })
})
