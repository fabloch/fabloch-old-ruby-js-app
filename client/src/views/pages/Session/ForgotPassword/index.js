import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Grid, Form, Button } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"

import InputField from "../../../components/InputField"
import { sessionOperations } from "../../../../state/ducks/session"

const ForgotPassword = ({
  sendPasswordResetEmail,
  error,
  handleSubmit,
  pristine,
  submitting,
}) => (
  <Grid.Column width={5} textAlign="center">
    <h1>Mot de passe oublié</h1>
    <Form onSubmit={handleSubmit(sendPasswordResetEmail)}>
      {error && <strong>{error}</strong>}
      <Field
        type="email"
        name="email"
        component={InputField}
        placeholder="Email"
        label="Email"
      />

      <Button
        type="submit"
        disabled={pristine || submitting}
        fluid
        primary
      >
        Réinitialiser mon mot de passe
      </Button>
    </Form>
  </Grid.Column>
)

ForgotPassword.propTypes = {
  sendPasswordResetEmail: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

ForgotPassword.defaultProps = {
  error: null,
}

const mapDispatchToProps = {
  sendPasswordResetEmail: sessionOperations.sendPasswordResetEmail,
}

const ConnectedForgotPassword = connect(null, mapDispatchToProps)(ForgotPassword)

const FormedForgotPassword = reduxForm({
  form: "sendPasswordResetEmail",
  // validate,
  // warn,
  // asyncValidate,
})(ConnectedForgotPassword)

export default FormedForgotPassword
