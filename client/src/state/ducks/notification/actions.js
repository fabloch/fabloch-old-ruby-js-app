import types from "./types"

const showNotification = notification => ({
  type: types.SHOW,
  notification,
})

const hideNotification = id => ({
  type: types.HIDE,
  id,
})

const deleteNotification = id => ({
  type: types.DELETE,
  id,
})

export default {
  showNotification,
  hideNotification,
  deleteNotification,
}
