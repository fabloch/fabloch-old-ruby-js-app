import React from 'react'
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Notification = ({notification, hideNotification}) => {
  const { id, level, header, content } = notification
  return (
    <div>
      <Message level >
        <Message.Header>{header}</Message.Header>
        <p>{content}</p>
      </Message>
    </div>
  )
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  hideNotification: PropTypes.func.isRequired,
}
