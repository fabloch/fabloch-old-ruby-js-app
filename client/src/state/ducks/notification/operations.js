import shortid from "shortid"
import actions from "./actions"

const hideNotification = actions.hideNotification

const addNotification = notification => (dispatch) => {
  const id = shortid.generate()
  const date = new Date()
  const timeStamp = date.getTime();
  const notificationWithId = {
    ...notification,
    id,
    timeStamp,
  }

  dispatch(actions.showNotification(notificationWithId))
  setTimeout(() => {
    dispatch(actions.hideNotification(notificationWithId.id))
  }, 5000)
}

export default {
  addNotification,
  hideNotification,
}
