import React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"

import PlanBlock from "./PlanBlock"

const Plans = ({ plans, selectPlan }) =>
  <Grid stackable columns={3} divided padded>
    <Grid.Column>
      <PlanBlock {...plans.regular} selectPlan={selectPlan} />
    </Grid.Column>
    <Grid.Column>
      <PlanBlock {...plans.pro} selectPlan={selectPlan} />
    </Grid.Column>
    <Grid.Column>
      <PlanBlock {...plans.company} selectPlan={selectPlan} />
    </Grid.Column>
  </Grid>

Plans.propTypes = {
  plans: PropTypes.object.isRequired,
  selectPlan: PropTypes.func.isRequired,
}

export default Plans
