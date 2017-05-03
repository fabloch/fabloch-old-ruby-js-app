import React from 'react'
import PropTypes from 'prop-types'

import { Form, Button } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'

import { validate } from './validate'
import { asyncValidate } from './asyncValidate'
import { warn } from './warn'
import { submit } from './submit'
import { renderField} from './renderField'

const SignUpForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Field
        type="email"
        name="email"
        component={renderField}
        placeholder="First Name"
        label="Email"
      />

      <Field
        name="password"
        component={renderField}
        type="password"
        placeholder="Password"
        label="Password"
      />

      <Button
        type="submit"
        disabled={pristine || submitting}
        fluid
        primary
      >
        Sign Up
      </Button>
      <p>
        <Button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}>
          Clear Values
        </Button>
      </p>
    </Form>
  )
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  warn: PropTypes.func.isRequired,
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

const ConnectedSignUpForm = reduxForm({
  form: 'signup',
  validate,
  warn,
  asyncValidate,
})(SignUpForm)

export default ConnectedSignUpForm
