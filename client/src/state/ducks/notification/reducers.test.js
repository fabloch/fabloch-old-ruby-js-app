import { Map } from "immutable"
import * as matchers from "jest-immutable-matchers"
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
  beforeEach(() =>
    jest.addMatchers(matchers),
  )

  it("should return the initial state", () => {
    expect(
      notificationReducer(undefined, {}),
    ).toEqualImmutable(
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
          someId: notificationOut,
        }),
        history: Map({}),
      })
      expect(
        notificationReducer(initialState, action),
      ).toEqualImmutable(
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
          someId: notificationOut,
        }),
        history: Map({}),
      })

      expect(
        notificationReducer(previousState, action),
      ).toEqualImmutable(
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
      ).toEqualImmutable(
        nextState,
      )
    })
  })
})
