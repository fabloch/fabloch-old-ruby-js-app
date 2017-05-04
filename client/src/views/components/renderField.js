import React from 'react'
import { Form} from 'semantic-ui-react'

export const renderField = (
  {
    input,
    label,
    type, meta: { touched, error, warning }
  }
) => (
  <Form.Field>
    <label>{label}</label>
    <div>
      <Form.Input
        {...input}
        placeholder={label}
        type={type}
        error={touched && error ? true : null}
      />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </Form.Field>
)
