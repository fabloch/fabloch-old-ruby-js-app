import React from 'react'
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Notification = (
  {
    id,
    level,
    title,
    body,
    hideNotification,
  }
) => {
  return (
    <div>
      <Message
        error={level === "error"}
        warning={level === "warning"}
        info={level === "info"}
        success={level === "success"}
      >
        <Message.Header>{title}</Message.Header>
        <p>{body}</p>
      </Message>
    </div>
  )
}

Notification.propTypes = {
  id: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  hideNotification: PropTypes.func.isRequired,
}

export default Notification
