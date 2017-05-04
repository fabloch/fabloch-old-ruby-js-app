import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from './types'
import * as actions from './notifications'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

const notification = {
  id: "some_id",
  level: "success",
  header: "Login successful",
  content: "Login was successful",
}

describe('showNotification action', () => {
  it('returns action with type and notification', () => {
    expect(
      actions.showNotification(notification)
    ).toEqual(
      {
        type: types.SHOW_NOTIFICATION,
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
        type: types.HIDE_NOTIFICATION,
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
        type: types.DELETE_NOTIFICATION,
        id: "some_id"
      }
    )
  })
})

describe('addNotification action', () => {
  it('creates showNotification action and then hideNotification action', () => {
    jest.useFakeTimers()

    const expectedActions = [
      { type: types.SHOW_NOTIFICATION, notification },
      { type: types.HIDE_NOTIFICATION, id: notification.id }
    ]

    const store = mockStore({})

    store.dispatch(actions.addNotification(notification))

    jest.runAllTimers()

    expect(store.getActions()).toEqual(expectedActions)
  })
})

import reducer from './notifications'
import * as types from '../actions/types'
import { Map, fromJS } from 'immutable'

const notification = {
  level: "success",
  title: "Login successful",
  body: "Login was successful",
}

describe('notifications reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      Map({
        highlight: Map(),
        history: Map()
      })
    )
  })

  describe('should handle SHOW_NOTIFICATION', () => {
    it('with empty store', () => {
      const initialState = Map({
        highlight: Map({}),
        history: Map({})
      })
      const action = ({
        type: types.SHOW_NOTIFICATION,
        notification
      })
      const newState = reducer(initialState, action)
      const customId = newState.get('highlight').keySeq().last()
      expect(
        newState
      ).toEqual(
        Map({
          highlight: Map({
            [customId]: fromJS(notification)
          }),
          history: Map({})
        })
      )
    })

    it('with a notification in store', () => {
      const previousState = Map({
        highlight: Map({
          HkGnJJEkZ: Map({
            level: "success",
            title: "Login successful",
            body: "Login was successful",
          })
        }),
        history: Map({})
      })
      const action = {
        type: types.SHOW_NOTIFICATION,
        notification
      }
      const newState = reducer(previousState, action)
      const customId = newState.get('highlight').keySeq().last()
      expect(
        newState
      ).toEqual(
        Map({
          highlight: Map({
            HkGnJJEkZ: Map({
              level: "success",
              title: "Login successful",
              body: "Login was successful",
            }),
            [customId]: Map({
              level: "success",
              title: "Login successful",
              body: "Login was successful",
            }),
          }),
          history: Map({})
        })
      )
    })
  })

  describe('should handle HIDE_NOTIFICATION', () => {
    it('with a two notifications in store', () => {
      const initialState = Map({
        highlight: Map({
          HkGnJJEkZ: Map({
            level: "success",
            title: "Login successful",
            body: "Login was successful",
          }),
          qtrReGEZA: Map({
            level: "success",
            title: "Login successful",
            body: "Login was successful",
          })
        }),
        history: Map({})
      })
      const action = {
        type: types.HIDE_NOTIFICATION,
        id: "HkGnJJEkZ"
      }
      const newState = reducer(initialState, action)
      expect(
        newState
      ).toEqual(
        Map({
          highlight: Map({
            qtrReGEZA: Map({
              level: "success",
              title: "Login successful",
              body: "Login was successful",
            })
          }),
          history: Map({
            HkGnJJEkZ: Map({
              level: "success",
              title: "Login successful",
              body: "Login was successful",
            })
          })
        })
      )
    })
  })

})
