import React from "react"

import { Icon, Message } from "semantic-ui-react"
import Button from "../../components/Button"

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

export default RenewMessage
