import * as ActionTypes from './ActionTypes';

export const showNotification= (notification) => ({
  type: ActionTypes.SHOW_NOTIFICATION,
  notification
})

export const hideNotification = (id) => ({
  type: ActionTypes.HIDE_NOTIFICATION,
  id
})

export const deleteNotification = (id) => ({
  type: ActionTypes.DELETE_NOTIFICATION,
  id
})

export const addNotification = (notification) => (dispatch) => {
  dispatch(showNotification(notification))
  setTimeout(() => {
    dispatch(hideNotification(notification.id))
  }, 5000)}
