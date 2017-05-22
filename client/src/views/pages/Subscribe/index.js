import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, Step } from "semantic-ui-react"

import Plans from "./Plans"

import operations from "../../../state/ducks/subscriptions/operations"

class SubscribePage extends Component{
  componentDidMount() {
    const { fetchSubscriptions, subscriptions } = this.props
    if (!subscriptions.data) {
      fetchSubscriptions()
    }
  }

  steps() {
    return (
      [
        {
          active: true,
          icon: "map signs",
          title: "Formule",
          description: "Choisissez votre formule",
        },
        {
          disabled: true,
          icon: "credit card",
          title: "Paiement",
          description: "Choisissez le mode de paiement",
        },
        {
          disabled: true,
          icon: "unordered list",
          title: "Validation",
          description: "Confirmez les information et validez",
        },
      ]
    )
  }

  render() {
    const { subscriptions } = this.props

    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Step.Group items={this.steps()} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Plans {...subscriptions} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

SubscribePage.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  fetchSubscriptions: PropTypes.func.isRequired,
}

const mapStateToProps = ({ subscriptions }) => ({
  subscriptions: subscriptions.toJS(),
})

const connectedSubscribePage = connect(
  mapStateToProps,
  operations,
)(SubscribePage)

export default connectedSubscribePage
