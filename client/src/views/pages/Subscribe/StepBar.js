import React from "react"
import PropTypes from "prop-types"
import shortid from "shortid"

import { Step, Icon } from "semantic-ui-react"

const StepBar = ({ steps, focusStep }) =>
  <Step.Group>
    {steps.map((step, i) =>
      <Step
        key={shortid.generate()}
        onClick={() => focusStep(i)}
        active={step.active}
        completed={step.completed}
        disabled={step.disabled}
      >
        <Icon name={step.icon} />
        <Step.Content>
          <Step.Title>{step.title}</Step.Title>
          <Step.Description>{step.description}</Step.Description>
        </Step.Content>
      </Step>
    )}
  </Step.Group>

StepBar.propTypes = {
  steps: PropTypes.array.isRequired,
  focusStep: PropTypes.func.isRequired,
}

export default StepBar
