import React from "react"
import PropTypes from "prop-types"
import { Grid, Segment, Header, List } from "semantic-ui-react"
import moment from "moment"

import { planType, paidWith } from "./utils"

const Subscription = ({subscription}) =>
  <Segment>
    <Header>Formule {planType(subscription.plan)}</Header>
    <List horizontal>
      <List.Item>
        <List.Icon name="calendar" />
        <List.Content>
          Du {moment(subscription.startDate).format("LL")}
          au {moment(subscription.endDate).format("LL")}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="credit card" />
        <List.Content>
          {subscription.priceCents / 100}€
          {" "}
          {paidWith(subscription.paymentMethod)}
        </List.Content>
      </List.Item>
    </List>
  </Segment>

const History = ({ all }) =>
  <Grid padded>
    <Grid.Column>
      <Segment.Group>
        {all.map(subscription =>
          <Subscription subscription={subscription} />
        )}
      </Segment.Group>
    </Grid.Column>
  </Grid>

History.propTypes = {
  all: PropTypes.array.isRequired,
}
export default History
