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
    const {
      subscriptions,
      steps,
      plans,
      selectPlan,
    } = this.props

    const displaySteps = (steps) => {
      if (!steps[0].completed) {
        return (
          <div>
            <PlanIntro {...subscriptions} />
            <Plans
              plans={plans}
              selectPlan={selectPlan}
            />
          </div>
        )
      } else if (!steps[1].completed) {
        return <div>PaymentMethod</div>
      } else if (!steps[2].done) {
        return <div>Confirm</div>
      }
      return ""
    }

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
              { displaySteps(steps)}
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
  selectPlan: PropTypes.func.isRequired,
  selectPaymentMethod: PropTypes.func.isRequired,
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
