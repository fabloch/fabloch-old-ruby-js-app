import React from "react"

import { Grid, Segment, Card, Header, Icon, Button } from "semantic-ui-react"

const Title = ({
  shouldResubscribe,
  pastMemberships,
}) => {
  const title = () => {
    if (shouldResubscribe) {
      return "Prolongez votre abonnement dès maintenant"
    } else if (pastMemberships) {
      return "Vous nous manquez à la FABrique du Loch :'/"
    } else {
      return "Abonnez-vous à la FABrique du Loch"
    }
  }
  const subHeader = () => {
    console.log("test", shouldResubscribe)
    if (shouldResubscribe) {
      return <span>
        Votre abonnement se termine dans {shouldResubscribe.string}.
        Pour être tranquille, réabonnez-vous dès maintenant. <br />
        Votre abonnement sera prolongé jusqu'au {shouldResubscribe.newEndDate}
      </span>
    } else if (pastMemberships) {
      return <span>
        Réabonnez-vous maintenant, vous récupérerez fièrement votre
        { " "}
        <strong>Membre depuis le {pastMemberships.memberSince}"</strong> ;-)
      </span>
    } else {
      return <span>
        Rejoignez blabla
      </span>
    }
  }

  return (
    <Header as="h1" textAlign="center" color="orange" icon>
      <Icon name='sun' />
      {title()}
       <Header.Subheader>{subHeader()}</Header.Subheader>
    </Header>
  )
}

const SubscribeBlock = ({ title, subheader, color, bulletpoints }) =>
  <Segment.Group>
    <Segment inverted color={color} textAlign="center">
      <Header inverted as="h2" content={title} subheader={subheader} />
    </Segment>
    <Segment>
      <ul>
        {bulletpoints.map(point => <li>{point}</li>)}
      </ul>
    </Segment>
    <Segment>
      <Button
        color={color}
        content="Continuer"
        icon="chevron right"
        labelPosition="right"
        size="large"
        fluid
      />
    </Segment>
  </Segment.Group>


const Plans = props =>
  <Segment.Group>
    <Segment>
      <Title {...props} />
    </Segment>
    <Segment>
      <Grid stackable columns={3} divided padded>
        <Grid.Column>
          <SubscribeBlock {...props.plans.normal} />
        </Grid.Column>
        <Grid.Column>
          <SubscribeBlock {...props.plans.pro} />
        </Grid.Column>
        <Grid.Column>
          <SubscribeBlock {...props.plans.company} />
        </Grid.Column>
      </Grid>
    </Segment>
  </Segment.Group>

export default Plans
