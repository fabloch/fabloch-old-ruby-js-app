import React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"

import PublicCard from "./PublicCard"
import Private from "./Private"

const Show = props => (
  <Grid>
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <PublicCard {...props} />
    </Grid.Column>

    <Grid.Column mobile={16} tablet={8} computer={12}>
      <Private {...props} />
    </Grid.Column>
  </Grid>
)

Show.propTypes = {
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  description: PropTypes.string,
  birthday: PropTypes.string,
}

Show.defaultProps = {
  firstname: "",
  lastname: "",
  description: "",
  birthday: "",
}

export default Show
