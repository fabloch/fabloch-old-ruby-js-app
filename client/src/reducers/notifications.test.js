import reducer from './notifications'
import * as ActionTypes from '../actions/ActionTypes'
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
        type: ActionTypes.SHOW_NOTIFICATION,
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
        type: ActionTypes.SHOW_NOTIFICATION,
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
        type: ActionTypes.HIDE_NOTIFICATION,
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
