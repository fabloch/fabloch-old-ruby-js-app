import { Map, is } from "immutable"
import loadingReducer from "./reducers"
import types from "./types"

describe("loadingReducer", () => {
  it("should return the initial state", () => {
    expect(
      is(
        loadingReducer(undefined, {}),
        Map({
          loading: false,
        }),
      ),
    ).toEqual(true)
  })

  describe("handles START", () => {
    it("with loading false", () => {
      const initialState = Map({
        loading: false,
      })
      const action = ({
        type: types.START,
      })
      const nextState = Map({
        loading: true,
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
        loading: true,
      })
      const action = ({
        type: types.START,
      })
      const nextState = Map({
        loading: true,
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
          loading: true,
        })
        const action = {
          type: types.STOP,
        }
        const nextState = Map({
          loading: false,
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
          loading: false,
        })
        const action = {
          type: types.STOP,
        }
        const nextState = Map({
          loading: false,
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
