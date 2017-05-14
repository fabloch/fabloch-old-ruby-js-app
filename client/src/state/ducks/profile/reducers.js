import { Map } from "immutable"
import types from "./types"

const initialState = Map({
  isLoading: false,
})

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  /* Signup */
  case types.GET_REQUEST:
    return state.set("isLoading", true)

  case types.GET_SUCCESS:
    return state
      .set("data", action.data)
      .set("isLoading", false)
      .set("notFound", false)

  case types.GET_FAILURE:
    return state
      .set("isLoading", false)
      .set("notFound", true)

  default:
    return state
  }
}

export default profileReducer
