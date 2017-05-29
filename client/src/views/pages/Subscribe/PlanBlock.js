import React from "react"
import PropTypes from "prop-types"
import { Segment, Header, Button } from "semantic-ui-react"
import shortid from "shortid"

const PlanBlock = ({
  planName,
  title,
  subheader,
  color,
  bulletpoints,
  selectPlan,
}) =>
  <Segment.Group>
    <Segment inverted color={color} textAlign="center">
      <Header inverted as="h2" content={title} subheader={subheader} />
    </Segment>
    <Segment>
      <ul>
        {bulletpoints.map(point => <li key={shortid.generate()}>{point}</li>)}
      </ul>
    </Segment>
    <Segment>
      <Button
        onClick={() => selectPlan(planName)}
        color={color}
        content="Continuer"
        icon="chevron right"
        labelPosition="right"
        size="large"
        fluid
      />
    </Segment>
  </Segment.Group>

PlanBlock.propTypes = {
  planName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bulletpoints: PropTypes.array.isRequired,
  selectPlan: PropTypes.func.isRequired,
}

export default PlanBlock
