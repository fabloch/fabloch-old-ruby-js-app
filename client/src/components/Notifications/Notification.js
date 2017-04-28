import React from 'react'
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';

const Notification = ({notification, hideNotification}) => {
  const { id, type, text } = notification
  return (
    <div>
      <Alert bsStyle={type} onDismiss={() => hideNotification(id)}>
        {text}
      </Alert>
      <Button onClick={() => hideNotification(id)}>Hide Alert</Button>
    </div>
  )
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  hideNotification: PropTypes.func.isRequired,
}
