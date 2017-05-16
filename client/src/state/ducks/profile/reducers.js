import { Map } from "immutable"
import types from "./types"

const initialState = Map({
  isLoading: false,
  isEditing: false,
})

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_REQUEST:
  case types.POST_REQUEST:
  case types.PUT_REQUEST:
    return state.set("isLoading", true)

  case types.FETCH_SUCCESS:
  case types.POST_SUCCESS:
  case types.PUT_SUCCESS:
    return state
      .set("data", action.data)
      .set("isLoading", false)
      .set("errors", false)

  case types.FETCH_FAILURE:
  case types.POST_FAILURE:
  case types.PUT_FAILURE:
    return state
      .set("isLoading", false)
      .set("errors", true)

  case types.TOGGLE_EDITING:
    return state
      .set("isEditing", !state.get("isEditing"))

  default:
    return state
  }
}

export default profileReducer
