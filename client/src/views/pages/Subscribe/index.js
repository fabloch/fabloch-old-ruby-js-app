import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, Segment } from "semantic-ui-react"

import operations from "../../../state/ducks/subscribe/operations"

import StepBar from "./StepBar"
import PlanIntro from "./PlanIntro"
import Plans from "./Plans"
import Payment from "./Payment"
import Confirm from "./Confirm"

class SubscribePage extends Component {
  componentDidMount() {
    const { fetchSubscriptions, subscriptions } = this.props
    if (!subscriptions) {
      fetchSubscriptions()
    }
  }

  render() {
    const {
      isFetching,
      subscriptions,
      steps,
      plans,
      selectPlan,
      selectPaymentMethod,
      focusStep,
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
        return <Payment selectPaymentMethod={selectPaymentMethod} />
      } else if (!steps[2].done) {
        return <Confirm steps={steps} subscriptions={subscriptions} />
      }
      return ""
    }

    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <StepBar steps={steps} focusStep={focusStep} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment padded loading={isFetching}>
              { displaySteps(steps)}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

SubscribePage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  subscriptions: PropTypes.object,
  plans: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
  fetchSubscriptions: PropTypes.func.isRequired,
  selectPlan: PropTypes.func.isRequired,
  selectPaymentMethod: PropTypes.func.isRequired,
  focusStep: PropTypes.func.isRequired,
}

SubscribePage.defaultProps = {
  subscriptions: null,
}

const mapStateToProps = ({ subscribe }) => ({
  isFetching: subscribe.get("isFetching"),
  subscriptions: subscribe.get("subscriptions") && subscribe.get("subscriptions").toJS(),
  plans: subscribe.get("plans") && subscribe.get("plans").toJS(),
  steps: subscribe.get("steps") && subscribe.get("steps").toJS(),
})

const connectedSubscribePage = connect(
  mapStateToProps,
  operations,
)(SubscribePage)

export default connectedSubscribePage
