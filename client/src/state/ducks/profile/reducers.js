import { Map } from "immutable"
import types from "./types"

const initialState = Map({
  isLoading: false,
})

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  /* Signup */
  case types.FETCH_REQUEST:
    return state.set("isLoading", true)

  case types.FETCH_SUCCESS:
    return state
      .set("data", action.data)
      .set("isLoading", false)
      .set("notFound", false)

  case types.FETCH_FAILURE:
    return state
      .set("isLoading", false)
      .set("notFound", true)

  default:
    return state
  }
}

export default profileReducer
