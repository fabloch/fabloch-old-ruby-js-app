import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, Step } from "semantic-ui-react"

import Plans from "./Plans"

import membershipFakeData from "../Membership/fakeData/membership"

const SubscribePage = ({membership}) => {
  const steps = [
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

  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Step.Group items={steps} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Plans {...membership} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

SubscribePage.propTypes = {
  membership: PropTypes.object.isRequired,
}

const mapStateToProps = () => ({
  membership: membershipFakeData,
})

const connectedSubscribePage = connect(
  mapStateToProps,
  null,
)(SubscribePage)

export default connectedSubscribePage
