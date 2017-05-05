import { Map, fromJS } from "immutable"
import notificationReducer from "./reducers"
import types from "./types"

const notification = {
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
        notification,
      })
      const newState = notificationReducer(initialState, action)
      const customId = newState.get("highlight").keySeq().last()
      expect(
        newState,
      ).toEqual(
        Map({
          highlight: Map({
            [customId]: fromJS(notification),
          }),
          history: Map({}),
        }),
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
        notification,
      }
      const newState = notificationReducer(previousState, action)
      const customId = newState.get("highlight").keySeq().last()
      expect(
        newState,
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
          history: Map({}),
        }),
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
      const newState = notificationReducer(initialState, action)
      expect(
        newState,
      ).toEqual(
        Map({
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
        }),
      )
    })
  })
})
