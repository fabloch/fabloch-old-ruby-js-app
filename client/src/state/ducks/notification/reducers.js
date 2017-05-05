import shortid from "shortid"
import types from "./types"
import { Map } from "immutable"

const initialState = Map({
  highlight: Map({}),
  history: Map({}),
})

const notifications = (state = initialState, action) => {
  switch (action.type) {
  case types.SHOW:
    const newId = shortid.generate()
    return state.setIn(
      ["highlight", newId],
      Map({
        level: action.notification.level,
        title: action.notification.title,
        body: action.notification.body
      })
    )

  case types.HIDE:
    return state
      .setIn(
        ["history", action.id],
        state.getIn(["highlight", action.id])
      )
      .deleteIn(["highlight", action.id])
  default:
    return state
  }
}

export default notifications
