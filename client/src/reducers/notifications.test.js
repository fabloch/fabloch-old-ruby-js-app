import reducer from './notifications'
import * as ActionTypes from '../actions/ActionTypes'

const notification = {
  level: "success",
  title: "Login successful",
  body: "Login was successful",
}

describe('notifications reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  describe('should handle SHOW_NOTIFICATION', () => {
    it('with empty store', () => {
      expect(
        reducer([], {
          type: ActionTypes.SHOW_NOTIFICATION,
          notification
        })
      ).toMatchObject(
        [notification]
      )
    })

    it('with a notification in store', () => {
      expect(
        reducer([notification], {
          type: ActionTypes.SHOW_NOTIFICATION,
          notification
        })
      ).toMatchObject(
        [notification, notification]
      )
    })
  })

  describe('should handle HIDE_NOTIFICATION', () => {
    it('with a two notifications in store', () => {
      const initialState = [
        {
          id: "some_random_id",
          level: "success",
          title: "Login successful",
          body: "Login was successful",
        },
        {
          id: "some_other_random_id",
          level: "info",
          title: "another notification",
          body: "another body",
        }
      ]
      const expectedState = [
        {
          id: "some_other_random_id",
          level: "info",
          title: "another notification",
          body: "another body",
        }
      ]
      const action = {
        type: ActionTypes.HIDE_NOTIFICATION,
        id: "some_random_id"
      }
      expect(
        reducer(initialState, action)
      ).toMatchObject(
        expectedState
      )
    })
  })

})
