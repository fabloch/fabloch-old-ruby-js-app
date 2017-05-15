import { Map } from "immutable"
import types from "./types"

const initialState = Map({
  isLoading: false,
})

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
  case (types.START):
    return state.set("isLoading", true)
  case (types.STOP):
    return state.set("isLoading", false)
  default:
    return state
  }
}

export default loadingReducer
