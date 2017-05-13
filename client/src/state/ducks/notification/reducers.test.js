import { Map, fromJS } from "immutable"
import notificationReducer from "./reducers"
import types from "./types"

const notificationIn = {
  id: "someId",
  level: "success",
  title: "Login successful",
  body: "Login was successful",
}

const notificationOut = {
  level: "success",
  title: "Login successful",
  body: "Login was successful",
}

describe("notifications notificationReducer", () => {
  it("should return the initial state", () => {
    expect(
      notificationReducer(undefined, {}),
    ).toEqual(
      Map({
        highlight: Map(),
        history: Map(),
      }),
    )
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
          someId: fromJS(notificationOut),
        }),
        history: Map({}),
      })
      expect(
        notificationReducer(initialState, action),
      ).toEqual(
        nextState,
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
          someId: fromJS(notificationOut),
        }),
        history: Map({}),
      })

      expect(
        notificationReducer(previousState, action),
      ).toEqual(
        nextState,
      )
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
