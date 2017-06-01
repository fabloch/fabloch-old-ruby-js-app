import React from "react"
import { Grid } from "semantic-ui-react"

import Membership from "./Membership"
import Profile from "./Profile"

const DashboardPage = () =>
  <div>
    <Grid padded columns={1}>
      <Grid.Column>
        <Profile />
      </Grid.Column>
    </Grid>
    <Grid padded columns={1}>
      <Grid.Column>
        <Membership />
      </Grid.Column>
    </Grid>
  </div>

export default DashboardPage
