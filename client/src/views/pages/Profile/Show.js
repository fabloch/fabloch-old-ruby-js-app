import React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"

import PublicCard from "./PublicCard"
import Private from "./Private"

const Show = ({ profile }) =>
  <Grid>
    <Grid.Column mobile={16} tablet={8} computer={4}>
      Infos publiques
      <PublicCard {...profile.data} />
    </Grid.Column>

    <Grid.Column mobile={16} tablet={8} computer={12}>
      Infos privées
      <Private {...profile.data} />
    </Grid.Column>
  </Grid>

Show.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default Show
