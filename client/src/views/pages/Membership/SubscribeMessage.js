import React from "react"
import PropTypes from "prop-types"
import moment from "moment"

import { Icon, Message, Divider } from "semantic-ui-react"
import RouterButton from "../../components/RouterButton"

const Resubscribe = ({
  subscriptions,
  isFetching,
  fetchErrors,
}) => {
  let info = false
  let warning = false
  let error = true
  if (!isFetching
    && ((subscriptions && subscriptions.shouldResubscribe)
    || fetchErrors)) {
    let title = ""
    let body = ""
    let action = ""
    if (fetchErrors) {
      title = "Vous n'avez pas encore d'abonnement à la FABrique du Loch."
      body = "Cliquez le bouton suivant et découvrez la formule qui vous convient."
      action = "Voir les abonnements"
    } else if (subscriptions.shouldResubscribe) {
      action = "Me réabonner maintenant"
      const {
        shouldResubscribe,
        memberUntilFromNowInDays,
        memberUntil,
        memberSince,
      } = subscriptions
      info = shouldResubscribe === "info" && true
      warning = shouldResubscribe === "warning" && true
      error = shouldResubscribe === "error" && true

      if (memberUntilFromNowInDays > 0) {
        title = `Attention, votre abonnement va prendre
          fin le ${moment(memberUntil).format("d MMM YYYY")} (dans ${memberUntilFromNowInDays} jours)`
        body = `Pour être tranquille, réabonnez-vous dès maintenant.
          Votre abonnement sera prolongé jusqu'au
          ${moment(memberUntil).add(1, "y").subtract(1, "d").format("d MMM YYYY")}.`
      } else {
        title = "Votre abonnement à la FAbrique du loch est terminé."
        body = `Votre serez abonné.e du ${moment().format("d MMM YYYY")}
          au ${moment().add(1, "y").subtract(1, "d").format("d MMM YYYY")}.
          Vous garderez votre ancienneté depuis le ${memberSince}`
      }
    }
    return (
      <Message
        icon
        info={info}
        warning={warning}
        error={error}
      >
        <Icon name="remove user" />
        <Message.Content>
          <Message.Header>{title}</Message.Header>
          {body}
          <Divider />
          <RouterButton
            icon="chevron right"
            labelPosition="right"
            content={action}
            color="green"
            size="small"
            to={{ pathname: "/subscribe" }}
          />
        </Message.Content>
      </Message>
    )
  }
  return null
}

Resubscribe.propTypes = {
  subscriptions: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  fetchErrors: PropTypes.bool.isRequired,
}

Resubscribe.defaultProps = {
  subscriptions: null,
}

export default Resubscribe
