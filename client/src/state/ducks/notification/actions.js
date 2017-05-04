import * as types from './types';

export const showNotification= (notification) => ({
  type: types.SHOW_NOTIFICATION,
  notification
})

export const hideNotification = (id) => ({
  type: types.HIDE_NOTIFICATION,
  id
})

export const deleteNotification = (id) => ({
  type: types.DELETE_NOTIFICATION,
  id
})

export const addNotification = (notification) => (dispatch) => {
  dispatch(showNotification(notification))
  setTimeout(() => {
    dispatch(hideNotification(notification.id))
  }, 5000)}
