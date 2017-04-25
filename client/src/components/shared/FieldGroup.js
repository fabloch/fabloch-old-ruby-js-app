import React from 'react';
import { PropTypes } from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';

const FieldGroup = (
  {
    id,
    type,
    name,
    label,
    value,
    onChange,
    errors,
    ...props
  }) => (
    <FormGroup
      controlId={id}
      validationState={errors ? 'error' : null}
      onChange={onChange}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {errors && <HelpBlock>{errors.join(', ')}</HelpBlock>}
    </FormGroup>
  )

FieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
}

FieldGroup.defaultProps = {
  type: 'text',
  value: ''
}

export default FieldGroup;
