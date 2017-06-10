import React from 'react'
import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';

const Notification = (
  {
    icon,
    loading,
    level,
    size,
    title,
    body,
    hideNotification,
  }
) => {
  return (
    <div>
      <Message
        icon={icon && true}
        size={size}
        error={level === "error"}
        warning={level === "warning"}
        info={level === "info"}
        success={level === "success"}
      >
        {icon && <Icon name={icon} loading={loading} />}
        <Message.Header>{title}</Message.Header>
        {body && <p>{body}</p>}
      </Message>
    </div>
  )
}

Notification.propTypes = {
  icon: PropTypes.string,
  loading: PropTypes.bool,
  level: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  hideNotification: PropTypes.func.isRequired,
}

Notification.defaultProps = {
  icon: undefined,
  loading: undefined,
  size: undefined,
  title: undefined,
  body: undefined,
}

export default Notification
