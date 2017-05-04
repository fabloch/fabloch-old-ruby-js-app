import React from 'react';
import { PropTypes } from 'prop-types';

const FieldGroup = (
  {
    id,
    label,
    onChange,
    errors,
    ...props
  }) => (
    <input />
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
