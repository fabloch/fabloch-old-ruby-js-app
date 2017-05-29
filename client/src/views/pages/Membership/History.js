import React from "react"
import PropTypes from "prop-types"
import { Grid, Segment, Header, List } from "semantic-ui-react"
import moment from "moment"

import { planType, paidWith } from "./utils"

const Subscription = ({membership}) =>
  <Segment>
    <Header>Formule {planType(membership.type)}</Header>
    <List horizontal>
      <List.Item>
        <List.Icon name="calendar" />
        <List.Content>
          Du {moment(membership.start).format("d MMM YYYY")}
          au {moment(membership.end).format("d MMM YYYY")}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="credit card" />
        <List.Content>
          {membership.price}€
          {" "}
          {paidWith(membership.paymentMethod)}
        </List.Content>
      </List.Item>
    </List>
  </Segment>

const History = ({ allMemberships }) =>
  <Grid padded>
    <Grid.Column>
      <Segment.Group>
        {allMemberships.map(membership =>
          <Subscription membership={membership} />
        )}
      </Segment.Group>
    </Grid.Column>
  </Grid>

History.propTypes = {
  allMemberships: PropTypes.array.isRequired,
}
export default History
