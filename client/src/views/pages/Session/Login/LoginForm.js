import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Form, Button, Message } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"

// import { validate } from "./validate"
// import { asyncValidate } from "./asyncValidate"
// import { warn } from "./warn"
import InputField from "../../../components/InputField"
import { sessionOperations } from "../../../../state/ducks/session"

const LoginForm = (props) => {
  const { login, error, handleSubmit, pristine, reset, submitting } = props

  return (
    <Form onSubmit={handleSubmit(login)}>
      {
        error &&
        <Message
          icon="bug"
          header={error}
          negative
        />
      }
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
        placeholder="Mot de passe"
        label="Mot de passe"
      />

      <Button
        type="submit"
        disabled={pristine || submitting}
        fluid
        primary
      >
        Se connecter
      </Button>
      <p>
        <Button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Effacer
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

const mapDispatchToProps = {
  login: sessionOperations.login,
}

const ConnectedLoginForm = connect(null, mapDispatchToProps)(LoginForm)

const FormedLoginForm = reduxForm({
  form: "login",
  // validate,
  // warn,
  // asyncValidate,
})(ConnectedLoginForm)

export default FormedLoginForm
