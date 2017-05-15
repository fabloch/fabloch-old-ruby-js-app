import { Map, is } from "immutable"
import loadingReducer from "./reducers"
import types from "./types"

describe("loadingReducer", () => {
  it("should return the initial state", () => {
    expect(
      is(
        loadingReducer(undefined, {}),
        Map({
          isLoading: false,
        }),
      ),
    ).toEqual(true)
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
        is(
          loadingReducer(initialState, action),
          nextState,
        ),
      ).toEqual(
        true,
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
        is(
          loadingReducer(initialState, action),
          nextState,
        ),
      ).toEqual(
        true,
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
          is(
            loadingReducer(previousState, action),
            nextState,
          ),
        ).toEqual(true)
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
          is(
            loadingReducer(previousState, action),
            nextState,
          ),
        ).toEqual(true)
      })
    })
  })
})
