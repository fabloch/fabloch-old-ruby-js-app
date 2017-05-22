import React from "react"
import PropTypes from "prop-types"

import { Icon, Message } from "semantic-ui-react"
import Button from "../../components/Button"

const Resubscribe = ({
  // memberUntil,
  // memberUntilFromNow,
  memberUntilFromNowInDays,
  // memberSince,
  // memberSinceFromNow,
  // memberSinceFromNowInDays,
  shouldResubscribe,
}) => {
  const info = shouldResubscribe === "info" && true
  const warning = shouldResubscribe === "warning" && true
  const error = shouldResubscribe === "error" && true

  return (
    <Message
      icon
      info={info}
      warning={warning}
      error={error}
    >
      <Icon name="remove user" />
      <Message.Content>
        <Message.Header>
          {
            (warning || error)
            && `Attention, votre abonnement va prendre
              fin dans ${memberUntilFromNowInDays}`}
        </Message.Header>
        Pour être tranquille, réabonnez-vous dès maintenant. <br />
        Votre abonnement sera prolongé jusqu'au {shouldResubscribe.newEndDate} <br />
        <Button
          icon="chevron right"
          labelPosition="right"
          content="Me réabonner maintenant"
          color="green"
          size="small"
          to={{ pathname: "/subscribe"}}
        />
      </Message.Content>
    </Message>
  )
}

Resubscribe.propTypes = {
  // memberUntil: PropTypes.string.isRequired,
  // memberUntilFromNow: PropTypes.string.isRequired,
  memberUntilFromNowInDays: PropTypes.number.isRequired,
  // memberSince: PropTypes.string.isRequired,
  // memberSinceFromNow: PropTypes.string.isRequired,
  shouldResubscribe: PropTypes.string,
}

Resubscribe.defaultProps = {
  shouldResubscribe: null,
}

export default Resubscribe
