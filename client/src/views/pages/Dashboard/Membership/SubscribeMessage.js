import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
import isEmpty from "lodash/isEmpty"

import { Icon, Message, Divider } from "semantic-ui-react"
import NavButton from "../../../components/NavButton"

const Resubscribe = ({
  present,
  isLoading,
  loadErrors,
}) => {
  let info = false
  let warning = false
  let error = true
  if (!isLoading
    && ((!isEmpty(present) && present.shouldResubscribe)
    || loadErrors)) {
    let title = ""
    let body = ""
    let action = ""
    if (loadErrors) {
      title = "Vous n'avez pas encore d'abonnement à la FABrique du Loch."
      body = "Cliquez le bouton suivant et découvrez la formule qui vous convient."
      action = "Voir les abonnements"
    } else if (present.shouldResubscribe) {
      action = "Me réabonner maintenant"
      const {
        shouldResubscribe,
        memberUntilFromNowInDays,
        memberUntil,
        memberSince,
      } = present
      info = shouldResubscribe === "info" && true
      warning = shouldResubscribe === "warning" && true
      error = shouldResubscribe === "error" && true

      if (memberUntilFromNowInDays > 0) {
        title = `Attention, votre abonnement va prendre
          fin le ${moment(memberUntil).format("d MMM YYYY")} (dans ${memberUntilFromNowInDays} jours)`
        body = `Pour être tranquille, réabonnez-vous dès maintenant.
          Votre abonnement sera prolongé jusqu'au
          ${moment(memberUntil).add(1, "y").subtract(1, "d").format("LL")}.`
      } else {
        title = "Votre abonnement à la FAbrique du loch est terminé."
        body = `Cliquez le bouton suivant pour vous réabonner du ${moment().format("LL")}
          au ${moment().add(1, "y").subtract(1, "d").format("LL")}
          (Vous garderez votre ancienneté du ${moment(memberSince).format("LL")}).`
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
          <NavButton
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
  present: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  loadErrors: PropTypes.bool.isRequired,
}

Resubscribe.defaultProps = {
  present: null,
}

export default Resubscribe
