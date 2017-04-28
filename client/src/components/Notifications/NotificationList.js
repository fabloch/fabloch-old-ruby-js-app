import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideNotification } from '../../actions/notifications'
import Notification from './Notification'

const NotificationList = ({notifications, hideNotification}) => {
  const notificationList = notifications && notifications.map(notification =>
    <Notification
      key={notification.id}
      notification={notification}
      hideNotification={hideNotification}
    />
  )
  return (
    <div>{notificationList}</div>
  )
}

NotificationList.propTypes = {
  notifications: PropTypes.array,
  hideNotification: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  nofitications: state.notifications
})

const mapDispatchToProps = ({
  hideNotification,
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
