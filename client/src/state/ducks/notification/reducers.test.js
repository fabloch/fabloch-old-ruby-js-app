import { Map, fromJS, is } from "immutable"
import notificationReducer from "./reducers"
import types from "./types"

const notificationIn = {
  id: "someId",
  timeStamp: "946681200000",
  level: "success",
  title: "Login successful",
  body: "Login was successful",
}


const notificationOut = Map({
  id: "someId",
  level: "success",
  title: "Login successful",
  body: "Login was successful",
  timeStamp: "946681200000",
})

describe("notifications notificationReducer", () => {
  it("should return the initial state", () => {
    expect(
      is(
        notificationReducer(undefined, {}),
        Map({
          highlight: Map(),
          history: Map(),
        }),
      ),
    ).toEqual(true)
  })

  describe("should handle SHOW", () => {
    it("with empty store", () => {
      const initialState = Map({
        highlight: Map({}),
        history: Map({}),
      })
      const action = ({
        type: types.SHOW,
        notification: notificationIn,
      })
      const nextState = Map({
        highlight: Map({
          someId: notificationOut,
        }),
        history: Map({}),
      })
      expect(
        is(
          notificationReducer(initialState, action),
          nextState,
        ),
      ).toEqual(
        true,
      )
    })

    it("with a notification in store", () => {
      const previousState = Map({
        highlight: Map({
          HkGnJJEkZ: Map({
            level: "success",
            title: "Login successful",
            body: "Login was successful",
          }),
        }),
        history: Map({}),
      })
      const action = {
        type: types.SHOW,
        notification: notificationIn,
      }
      const nextState = Map({
        highlight: Map({
          HkGnJJEkZ: Map({
            level: "success",
            title: "Login successful",
            body: "Login was successful",
          }),
          someId: notificationOut,
        }),
        history: Map({}),
      })

      expect(
        is(
          notificationReducer(previousState, action),
          nextState,
        ),
      ).toEqual(true)
    })
  })

  describe("should handle HIDE", () => {
    it("with a two notifications in store", () => {
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
          }),
        }),
        history: Map({}),
      })
      const action = {
        type: types.HIDE,
        id: "HkGnJJEkZ",
      }
      const nextState = Map({
        highlight: Map({
          qtrReGEZA: Map({
            level: "success",
            title: "Login successful",
            body: "Login was successful",
          }),
        }),
        history: Map({
          HkGnJJEkZ: Map({
            level: "success",
            title: "Login successful",
            body: "Login was successful",
          }),
        }),
      })

      expect(
        notificationReducer(initialState, action),
      ).toEqual(
        nextState,
      )
    })
  })
})
