import React from "react"
import moment from "moment"

import { Grid, Segment, Card, Header, Icon, Button } from "semantic-ui-react"

const PlanIntro = ({
  memberUntil,
  memberUntilFromNow,
  memberUntilFromNowInDays,
  memberSince,
  // memberSinceFromNow,
  // memberSinceFromNowInDays,
  shouldResubscribe,
}) => {
  const title = () => {
    if (memberUntil && memberUntilFromNowInDays <= 0) {
      return "Vous nous manquez à la FABrique du Loch :'/"
    } else if (memberUntil && memberUntilFromNowInDays > 0) {
      return "Prolongez votre abonnement dès maintenant"
    } else {
      return "Abonnez-vous à la FABrique du Loch"
    }
  }
  const subHeader = () => {
    const newEndDate = moment(memberUntil).add(1, "y").format("L")

    if (memberUntil && memberUntilFromNowInDays <= 0) {
      return <span>
        Réabonnez-vous maintenant, vous récupérerez fièrement votre
        { " "}
        <strong>Membre depuis le {memberSince}"</strong> ;-)
      </span>
    } else if (memberUntil && memberUntilFromNowInDays > 0) {
      return <span>
        Votre abonnement se termine {memberUntilFromNow}.
        Pour être tranquille, réabonnez-vous dès maintenant. <br />
        Votre abonnement sera prolongé jusqu'au {newEndDate}.
      </span>
    } else {
      return <span>
        Rejoignez blabla
      </span>
    }
  }

  return (
    <Segment>
      <Header as="h1" textAlign="center" color="orange" icon>
        <Icon name='sun' />
        {title()}
         <Header.Subheader>{subHeader()}</Header.Subheader>
      </Header>
    </Segment>
  )
}

export default PlanIntro
