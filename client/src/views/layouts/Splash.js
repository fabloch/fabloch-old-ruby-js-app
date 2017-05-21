import React from "react"
import { Grid, Header, Icon } from "semantic-ui-react"

const Splash = () =>
  <Grid style={{ height: 400 }} verticalAlign="middle">
    <Grid.Column textAlign="center">
      <Header as="h1" color="orange" icon>
        <Icon name="cube" />
        La FABrique du Loch
        <Header.Subheader>
          FABRIQUER, INVENTER, APPRENDRE, SE RENCONTRER
        </Header.Subheader>
      </Header>
    </Grid.Column>
  </Grid>

export default Splash
