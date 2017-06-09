import React from "react"
import PropTypes from "prop-types"

import { Grid, Form, Button } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"
import InputField from "../../../components/InputField"

const ResetPasswordForm = ({
  updatePassword,
  error,
  handleSubmit,
  pristine,
  submitting,
}) => (
  <Grid.Column width={5} textAlign="center">
    <h1>Mot de passe oublié</h1>
    <Form onSubmit={handleSubmit(updatePassword)}>
      {error && <strong>{error}</strong>}
      <Field
        type="password"
        name="password"
        component={InputField}
        placeholder="Mot de passe"
        label="Nouveau mot de passe"
      />

      <Field
        type="password"
        name="password_confirmation"
        component={InputField}
        placeholder="Mot de passe"
        label="Confirmez le mot de passe"
      />

      <Button
        type="submit"
        disabled={pristine || submitting}
        fluid
        primary
      >
        Changer mon mot de passe
      </Button>
    </Form>
  </Grid.Column>
)

ResetPasswordForm.propTypes = {
  updatePassword: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

ResetPasswordForm.defaultProps = {
  error: null,
}

const FormedResetPasswordForm = reduxForm({
  form: "updatePassword",
  // validate,
  // warn,
  // asyncValidate,
})(ResetPasswordForm)

export default FormedResetPasswordForm
