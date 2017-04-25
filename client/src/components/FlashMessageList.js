import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert, Button } from 'react-bootstrap';
import { deleteFlashMessage } from '../actions/flashMessages'

const FlashMessage = ({message, deleteFlashMessage}) => {
  const { id, type, text } = message
  return (
    <div>
      <Alert bsStyle={type} onDismiss={() => deleteFlashMessage(id)}>
        {text}
      </Alert>
      <Button onClick={() => deleteFlashMessage(id)}>Hide Alert</Button>
    </div>
  )
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
}

const FlashMessageList = ({messages, deleteFlashMessage}) => {
  const messageList = messages.map(message =>
    <FlashMessage
      key={message.id}
      message={message}
      deleteFlashMessage={deleteFlashMessage}
    />
  )
  return (
    <div>{messageList}</div>
  )
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  messages: state.flashMessages
})

const mapDispatchToProps = ({
  deleteFlashMessage,
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessageList);
