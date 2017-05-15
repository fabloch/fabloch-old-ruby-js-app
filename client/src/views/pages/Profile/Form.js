import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Form, Button } from "semantic-ui-react"
import { reduxForm, Field } from "redux-form"

import { renderField } from "../../components/renderField"
import { profileOperations } from "../../../state/ducks/profile"

const ProfileForm = (props) => {
  const { submit, errors, handleSubmit, pristine, reset, submitting } = props

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Field
        type="text"
        name="username"
        component={renderField}
        placeholder="Username"
        label="Username"
      />

      <Field
        type="text"
        name="firstname"
        component={renderField}
        placeholder="Firstname"
        label="Firstname"
      />

      <Field
        type="text"
        name="lastname"
        component={renderField}
        placeholder="Lastname"
        label="Lastname"
      />

      <Button
        type="submit"
        disabled={pristine || submitting}
        fluid
        primary
      >
        Enregistrer
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

ProfileForm.propTypes = {
  submit: PropTypes.func.isRequired,
  errors: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

ProfileForm.defaultProps = {
  errors: null,
}

ProfileForm.contextTypes = {
  router: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  initialValues: state.profile.data && state.profile.data.toJS(),
})

const mapDispatchToProps = {
  submit: profileOperations.submit,
}

const ConnectedProfileForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileForm)

const FormedProfileForm = reduxForm({
  form: "submit",
  // validate,
  // warn,
  // asyncValidate,
})(ConnectedProfileForm)

export default FormedProfileForm
