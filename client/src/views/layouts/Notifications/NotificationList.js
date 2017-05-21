import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react"

import { notificationOperations } from "../../../state/ducks/notification"
import { getHighLightNotifications } from "../../../state"
import Notification from "./Notification"

const NotificationList = ({ notifications, hideNotification }) => {
  const notificationList = notifications.map(notification =>
    <Notification
      key={notification.id}
      {...notification}
      hideNotification={hideNotification}
    />
    ,
  )

  if (notifications.length > 0) {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            {notificationList}
          `</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  return null
}

NotificationList.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      timeStamp: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
  hideNotification: PropTypes.func.isRequired,
}

NotificationList.defaultProps = {
  notifications: [],
}

const mapStateToProps = state => ({
  notifications: getHighLightNotifications(state),
})

const mapDispatchToProps = ({
  hideNotification: notificationOperations.hideNotification,
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList)
