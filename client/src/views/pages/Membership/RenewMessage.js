import React from "react"

import { Icon, Message, Button } from "semantic-ui-react"

const RenewMessage = ({ shouldResubscribe }) =>
  <Message
    icon
    info={shouldResubscribe.info}
    warning={shouldResubscribe.warning}
    error={shouldResubscribe.error}
  >
    <Icon name="remove user" />
    <Message.Content>
      <Message.Header>
        {shouldResubscribe && `Attention, votre abonnement va prendre fin dans ${shouldResubscribe.string}`}
      </Message.Header>
      Vous pouvez prolonger votre abonnement en bas de cette page.
    </Message.Content>
  </Message>

export default RenewMessage
