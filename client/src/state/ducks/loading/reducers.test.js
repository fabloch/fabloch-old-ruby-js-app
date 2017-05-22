import { Map } from "immutable"
import * as matchers from "jest-immutable-matchers"
import loadingReducer from "./reducers"
import types from "./types"

describe("loadingReducer", () => {
  beforeEach(() =>
    jest.addMatchers(matchers),
  )

  it("should return the initial state", () => {
    expect(
      loadingReducer(undefined, {}),
    ).toEqualImmutable(
      Map({
        isLoading: false,
      }),
    )
  })

  describe("handles START", () => {
    it("with loading false", () => {
      const initialState = Map({
        isLoading: false,
      })
      const action = ({
        type: types.START,
      })
      const nextState = Map({
        isLoading: true,
      })
      expect(
        loadingReducer(initialState, action),
      ).toEqualImmutable(
        nextState,
      )
    })

    it("with loading true", () => {
      const initialState = Map({
        isLoading: true,
      })
      const action = ({
        type: types.START,
      })
      const nextState = Map({
        isLoading: true,
      })
      expect(
        loadingReducer(initialState, action),
      ).toEqualImmutable(
        nextState,
      )
    })

    describe("handlers STOP", () => {
      it("with loading true", () => {
        const previousState = Map({
          isLoading: true,
        })
        const action = {
          type: types.STOP,
        }
        const nextState = Map({
          isLoading: false,
        })

        expect(
          loadingReducer(previousState, action),
        ).toEqualImmutable(
          nextState,
        )
      })

      it("with loading false", () => {
        const previousState = Map({
          isLoading: false,
        })
        const action = {
          type: types.STOP,
        }
        const nextState = Map({
          isLoading: false,
        })

        expect(
          loadingReducer(previousState, action),
        ).toEqual(
          nextState,
        )
      })
    })
  })
})
