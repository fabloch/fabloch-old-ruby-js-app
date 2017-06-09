import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Grid, Form, Button } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"

import InputField from "../../../components/InputField"
import { sessionOperations } from "../../../../state/ducks/session"

class ResetPassword extends Component {
  componentWillMount() {
    const { location, setHeadersForPasswordReset } = this.props
    const data = JSON.parse(
      '{"' + decodeURI(location.search)
      .substring(1)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/%40/g, "@")
      + '"}'
    )
    console.log(data)
    setHeadersForPasswordReset(data)
  }

  render() {
    const {
      updatePassword,
      error,
      handleSubmit,
      pristine,
      submitting,
    } = this.props

    return (
      <Grid.Column width={5} textAlign="center">
        <h1>Réinitaliser mon mot de passe</h1>
        <Form onSubmit={handleSubmit(updatePassword)}>
          {error && <strong>{error}</strong>}
          <Field
            type="password"
            name="password"
            component={InputField}
            placeholder="Mot de passe"
            label="Nouveau Mot de passe"
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
  }
}

ResetPassword.propTypes = {
  location: PropTypes.object.isRequired,
  updatePassword: PropTypes.func.isRequired,
  setHeadersForPasswordReset: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

ResetPassword.defaultProps = {
  error: null,
}

const mapDispatchToProps = {
  updatePassword: sessionOperations.updatePassword,
  setHeadersForPasswordReset: sessionOperations.setHeadersForPasswordReset,
  setCurrentUser: sessionOperations.setCurrentUser,
}

const ConnectedResetPassword = connect(null, mapDispatchToProps)(ResetPassword)

const FormedResetPassword = reduxForm({
  form: "updatePassword",
  // validate,
  // warn,
  // asyncValidate,
})(ConnectedResetPassword)

export default FormedResetPassword
