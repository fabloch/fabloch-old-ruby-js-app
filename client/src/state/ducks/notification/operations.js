import actions from "./actions"

const addNotification = notification => (dispatch) => {
  dispatch(actions.showNotification(notification))
  setTimeout(() => {
    dispatch(actions.hideNotification(notification.id))
  }, 5000)
}

export default {
  addNotification,
}
