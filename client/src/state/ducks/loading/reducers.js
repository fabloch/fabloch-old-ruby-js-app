import { Map } from "immutable"
import types from "./types"

const initialState = Map({
  loading: false,
})

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
  case (types.START):
    return state.set("loading", true)
  case (types.STOP):
    return state.set("loading", false)
  default:
    return state
  }
}

export default loadingReducer
