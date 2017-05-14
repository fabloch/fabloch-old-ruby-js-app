import { Map, fromJS } from "immutable"
import types from "./types"

const initialState = Map({
  highlight: Map({}),
  history: Map({}),
})

const notifications = (state = initialState, action) => {
  switch (action.type) {
  case types.SHOW:
    return state.setIn(
      ["highlight", action.notification.id],
      fromJS(action.notification),
    )

  case types.HIDE:
    return state
      .setIn(
        ["history", action.id],
        state.getIn(["highlight", action.id]),
      )
      .deleteIn(["highlight", action.id])
  default:
    return state
  }
}

export default notifications
