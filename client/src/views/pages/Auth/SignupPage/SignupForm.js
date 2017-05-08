import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Form, Button } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"

import { validate } from "./validate"
import { asyncValidate } from "./asyncValidate"
import { warn } from "./warn"
import { renderField } from "../../../components/renderField"
import { signupOperations } from "../../../../state/ducks/signup"

const SignupForm = (props) => {
  const { emailSignup, handleSubmit, pristine, reset, submitting } = props

  return (
    <Form onSubmit={handleSubmit(emailSignup)}>
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
          onClick={reset}
        >
          Clear Values
        </Button>
      </p>
    </Form>
  )
}

SignupForm.propTypes = {
  emailSignup: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  warn: PropTypes.func.isRequired,
  pristine: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.func.isRequired,
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapDispatchToProps = ({
  emailSignup: signupOperations.emailSignup,
})

const ConnectedSignupForm = connect(null, mapDispatchToProps)(SignupForm)

const FormedSignupForm = reduxForm({
  form: "signup",
  validate,
  warn,
  asyncValidate,
})(ConnectedSignupForm)

export default FormedSignupForm
