const getHighLightNotifications = state =>
  state
    .get("highlight")
    .sortBy(notification => notification.timeStamp)
    .reverse()
    .toList()
    .toJS()

export default {
  getHighLightNotifications,
}
