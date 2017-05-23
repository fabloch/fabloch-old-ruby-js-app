import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, Segment, Step } from "semantic-ui-react"

import operations from "../../../state/ducks/subscribe/operations"

import PlanIntro from "./PlanIntro"
import Plans from "./Plans"

class SubscribePage extends Component {
  componentDidMount() {
    const { fetchFakeSubscriptions, subscriptions } = this.props
    if (!subscriptions) {
      fetchFakeSubscriptions()
    }
  }

  render() {
    const { subscriptions, steps, plans } = this.props

    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Step.Group items={steps} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment.Group>
              <PlanIntro {...subscriptions} />
              <Plans plans={plans} />
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

SubscribePage.propTypes = {
  subscriptions: PropTypes.object,
  plans: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
  fetchFakeSubscriptions: PropTypes.func.isRequired,
}

SubscribePage.defaultProps = {
  subscriptions: null,
}

const mapStateToProps = ({ subscribe }) => ({
  subscriptions: subscribe.get("subscriptions") && subscribe.get("subscriptions").toJS(),
  plans: subscribe.get("plans") && subscribe.get("plans").toJS(),
  steps: subscribe.get("steps") && subscribe.get("steps").toJS(),
})

const connectedSubscribePage = connect(
  mapStateToProps,
  operations,
)(SubscribePage)

export default connectedSubscribePage
