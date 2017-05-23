import React from "react"
import { Grid, Segment, Header, Button } from "semantic-ui-react"

const SubscribeBlock = ({ title, subheader, color, bulletpoints }) =>
  <Segment.Group>
    <Segment inverted color={color} textAlign="center">
      <Header inverted as="h2" content={title} subheader={subheader} />
    </Segment>
    <Segment>
      <ul>
        {bulletpoints.map((point, i) => <li key={i}>{point}</li>)}
      </ul>
    </Segment>
    <Segment>
      <Button
        color={color}
        content="Continuer"
        icon="chevron right"
        labelPosition="right"
        size="large"
        fluid
      />
    </Segment>
  </Segment.Group>


const Plans = ({ plans }) =>
  <Segment>
    <Grid stackable columns={3} divided padded>
      <Grid.Column>
        <SubscribeBlock {...plans.normal} />
      </Grid.Column>
      <Grid.Column>
        <SubscribeBlock {...plans.pro} />
      </Grid.Column>
      <Grid.Column>
        <SubscribeBlock {...plans.company} />
      </Grid.Column>
    </Grid>
  </Segment>

export default Plans
