import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { notificationOperations } from "../../../state/ducks/notification"
import Notification from "./Notification"

const NotificationList = ({ notifications, hideNotification }) => {
  const notificationList = notifications && notifications.map(notification =>
    <Notification
      key={notification.id}
      notification={notification}
      hideNotification={hideNotification}
    />)
  return (
    <div>{notificationList}</div>
  )
}

NotificationList.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  hideNotification: PropTypes.func.isRequired,
}

NotificationList.defaultProps = {
  notifications: [],
}

const mapStateToProps = state => ({
  nofitications: state.notification.get("highlight") && state.notification.get("highlight").toJS(),
})

const mapDispatchToProps = ({
  hideNotification: notificationOperations.hideNotification,
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList)
