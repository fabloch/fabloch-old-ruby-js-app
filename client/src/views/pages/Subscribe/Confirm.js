import React from "react"
import PropTypes from "prop-types"
import moment from "moment"

import { Grid, Segment, Header, List, Button } from "semantic-ui-react"
import { Elements } from "react-stripe-elements"

import CheckoutForm from "./CheckoutForm"

const Summary = ({ steps, create }) => {
  const startDate = moment(create.startDate).format("LL")
  const endDate = moment(create.endDate).format("LL")

  return (
    <Grid.Column>
      <Segment.Group>
        <Segment size="big" textAlign="center">
          <h2>Votre commande</h2>
        </Segment>
        <Segment>
          <List divided relaxed>
            <List.Item>
              <List.Icon name={steps[0].icon} size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="h3">{steps[0].title}</List.Header>
                <List.Description>{steps[0].description}</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="calendar" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="h3">Période d'abonnement</List.Header>
                <List.Description>
                  Du {startDate} au {endDate}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name={steps[1].icon} size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="h3">{steps[1].title}</List.Header>
                <List.Description>{steps[1].description}</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Segment.Group>
    </Grid.Column>
  )
}

Summary.propTypes = {
  steps: PropTypes.array.isRequired,
  create: PropTypes.object.isRequired,
}

const Confirm = ({ steps, create, postSubscription }) =>
  <Segment padded="very">
    <Header as="h1" textAlign="center">Confirmation</Header>
    { steps[1].paymentMethod === "card" ?
      <Grid stackable columns={2}>
        <Grid.Column>
          <Summary steps={steps} create={create} />
        </Grid.Column>
        <Grid.Column>
          <Elements>
            <Segment.Group>
              <Segment size="big" textAlign="center">
                <h2>Vos informations de paiement</h2>
              </Segment>
              <Segment>
                <CheckoutForm />
              </Segment>
            </Segment.Group>
          </Elements>
        </Grid.Column>
      </Grid>
    :
      <Grid>
        <Grid.Column>
          <Summary steps={steps} create={create} />
          <Grid padded>
            <Grid.Column>
              <Button
                onClick={() => {postSubscription(create)}}
                color="green"
                content="Confirmer"
                icon="chevron right"
                labelPosition="right"
                size="large"
                fluid
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    }
  </Segment>

Confirm.propTypes = {
  steps: PropTypes.array.isRequired,
  create: PropTypes.object,
  postSubscription: PropTypes.func.isRequired,
}

export default Confirm
