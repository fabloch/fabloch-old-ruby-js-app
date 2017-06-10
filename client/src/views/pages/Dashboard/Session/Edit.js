import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import {
  Button,
  Form,
} from "semantic-ui-react"

import InputField from "../../../components/InputField"
import operations from "../../../../state/ducks/session/operations"

const Edit = ({
  initialValues,
  updateAccount,
  handleSubmit,
  pristine,
  submitting,
}) => (
  <Form onSubmit={handleSubmit(updateAccount)}>
    <Field
      type="email"
      name="email"
      component={InputField}
      placeholder="Email"
      label="Email"
    />
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
      content="Enregistrer"
    />
  </Form>
)

Edit.propTypes = {
  initialValues: PropTypes.object.isRequired,
  updateAccount: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

const connectEdit1 = connect(
  null,
  operations,
)(Edit)


const connectEdit2 = reduxForm({
  form: "editAccount",
  // validate,
  // warn,
  // asyncValidate,
})(connectEdit1)

export default connectEdit2
