import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, Segment } from "semantic-ui-react"
import isEmpty from "lodash/isEmpty"

import operations from "../../../state/ducks/subscribe/operations"

import StepBar from "./StepBar"
import PlanIntro from "./PlanIntro"
import Plans from "./Plans"
import Payment from "./Payment"
import Confirm from "./Confirm"

class SubscribePage extends Component {
  componentDidMount() {
    const { fetchSubscriptions, present } = this.props
    if (isEmpty(present)) {
      fetchSubscriptions()
    }
  }

  render() {
    const {
      postSubscription,
      isLoading,
      present,
      create,
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
            <PlanIntro {...present} />
            <Plans
              plans={plans}
              selectPlan={selectPlan}
            />
          </div>
        )
      } else if (!steps[1].completed) {
        return <Payment selectPaymentMethod={selectPaymentMethod} />
      } else if (!steps[2].done) {
        return (
          <Confirm
            steps={steps}
            postSubscription={postSubscription}
            create={create}
          />
        )
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
            <Segment padded loading={isLoading}>
              { displaySteps(steps)}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

SubscribePage.propTypes = {
  postSubscription: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  present: PropTypes.object.isRequired,
  create: PropTypes.object.isRequired,
  plans: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
  fetchSubscriptions: PropTypes.func.isRequired,
  selectPlan: PropTypes.func.isRequired,
  selectPaymentMethod: PropTypes.func.isRequired,
  focusStep: PropTypes.func.isRequired,
}

const mapStateToProps = ({ subscribe }) => ({
  isLoading: subscribe.get("isLoading"),
  present: subscribe.get("present").toJS(),
  create: subscribe.get("create").toJS(),
  plans: subscribe.get("plans") && subscribe.get("plans").toJS(),
  steps: subscribe.get("steps") && subscribe.get("steps").toJS(),
})

const connectedSubscribePage = connect(
  mapStateToProps,
  operations,
)(SubscribePage)

export default connectedSubscribePage
