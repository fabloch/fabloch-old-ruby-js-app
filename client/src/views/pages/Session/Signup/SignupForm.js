import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Form, Button } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"

import { validate } from "./validate"
// import { asyncValidate } from "./asyncValidate"
import { warn } from "./warn"
import InputField from "../../../components/InputField"
import { sessionOperations } from "../../../../state/ducks/session"

const SignupForm = (props) => {
  const { signup, handleSubmit, pristine, reset, submitting } = props

  return (
    <Form onSubmit={handleSubmit(signup)}>
      <Field
        type="email"
        name="email"
        component={InputField}
        placeholder="Email"
        label="Email"
      />

      <Field
        name="password"
        component={InputField}
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
  signup: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapDispatchToProps = ({
  signup: sessionOperations.signup,
})

const ConnectedSignupForm = connect(null, mapDispatchToProps)(SignupForm)

const FormedSignupForm = reduxForm({
  form: "signup",
  validate,
  warn,
  // asyncValidate,
})(ConnectedSignupForm)

export default FormedSignupForm
