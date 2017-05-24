import React from "react"
import PropTypes from "prop-types"
import moment from "moment"

import { Grid, Segment, Header, List, Button } from "semantic-ui-react"

import PaymentForm from "./PaymentForm"

const Summary = ({ steps, subscriptions }) =>
  <Grid.Column>
    <h2>Votre commande</h2>
    <List divided relaxed>
      <List.Item>
        <List.Icon name={steps[0].icon} />
        <List.Content>
          <List.Header as="h3">{steps[0].title}</List.Header>
          <List.Description>{steps[0].description}</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="calendar" />
        <List.Content>
          <List.Header as="h3">Période d'abonnement</List.Header>
          <List.Description>
            Du {moment(subscriptions.newSubscriptionStart).format("L")} au {moment(subscriptions.newSubscriptionEnd).format("L")}
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name={steps[1].icon} />
        <List.Content>
          <List.Header as="h3">{steps[1].title}</List.Header>
          <List.Description>{steps[1].description}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Grid.Column>

const Confirm = ({ steps, subscriptions }) =>
  <Segment padded="very">
    <Header as="h1" textAlign="center">Confirmation</Header>
    { steps[1].paymentMethod === "card" ?
      <Grid stackable columns={2}>
        <Grid.Column>
          <Summary steps={steps} subscriptions={subscriptions} />
        </Grid.Column>
        <Grid.Column>
          <PaymentForm />
        </Grid.Column>
      </Grid>
    :
      <Grid>
        <Grid.Column>
          <Summary steps={steps} subscriptions={subscriptions} />
        </Grid.Column>
      </Grid>
    }

    <Grid>
      <Grid.Column>
        <Button
          onClick={() => {}}
          color="green"
          content="Confirmer"
          icon="chevron right"
          labelPosition="right"
          size="large"
          fluid
        />
      </Grid.Column>
    </Grid>

  </Segment>

Confirm.propTypes = {
  steps: PropTypes.array.isRequired,
  subscriptions: PropTypes.object.isRequired,
}

export default Confirm
