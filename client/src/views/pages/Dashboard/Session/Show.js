import React from "react"
import PropTypes from "prop-types"
import { List } from "semantic-ui-react"

const Show = ({ email }) => (
  <List divided verticalAlign="middle">
    <List.Item>
      <List.Icon name="at" size="large" verticalAlign="middle" />
      <List.Content>
        Email
        <List.Header as="h2">{email}</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="lock" size="large" verticalAlign="middle" />
      <List.Content>
        Mot de passe
        <List.Header as="h2">••••</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

Show.propTypes = {
  email: PropTypes.string.isRequired,
}

export default Show
