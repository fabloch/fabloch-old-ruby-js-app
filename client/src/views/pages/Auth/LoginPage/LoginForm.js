import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Form, Button } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"

// import { validate } from "./validate"
// import { asyncValidate } from "./asyncValidate"
// import { warn } from "./warn"
import { renderField } from "../../../components/renderField"
import { authOperations } from "../../../../state/ducks/auth"

const LoginForm = (props) => {
  const { login, error, handleSubmit, pristine, reset, submitting } = props

  return (
    <Form onSubmit={handleSubmit(login)}>
      {error && <strong>{error}</strong>}
      <Field
        type="email"
        name="email"
        component={renderField}
        placeholder="Email"
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

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

LoginForm.defaultProps = {
  error: null,
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  login: authOperations.login,
}

const ConnectedLoginForm = connect(null, mapDispatchToProps)(LoginForm)

const FormedLoginForm = reduxForm({
  form: "login",
  // validate,
  // warn,
  // asyncValidate,
})(ConnectedLoginForm)

export default FormedLoginForm
