import shortid from "shortid"
import actions from "./actions"

const hideNotification = actions.hideNotification

const addNotification = notification => (dispatch) => {
  const newId = shortid.generate()
  const notificationWithId = { ...notification, id: newId }

  dispatch(actions.showNotification(notificationWithId))
  setTimeout(() => {
    dispatch(actions.hideNotification(notificationWithId.id))
  }, 5000)
}

export default {
  addNotification,
  hideNotification,
}
