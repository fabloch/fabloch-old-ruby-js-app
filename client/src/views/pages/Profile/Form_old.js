import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { Form, Grid, Button } from "semantic-ui-react"
import NavButton from "../../components/NavButton"
import { reduxForm, Field } from "redux-form"

import { renderField } from "../../components/renderField"
import { profileOperations } from "../../../state/ducks/profile"

const ProfileForm = (props) => {
  const { initialValues, ubmit, errors, handleSubmit, pristine, reset, submitting } = props
  console.log(initialValues)

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
        content="Enregistrer"
      />
      <Grid columns="equal" padded="vertically">
        <Grid.Column>
          <NavButton
            type="button"
            color="red"
            icon="chevron left"
            labelPosition="left"
            onClick={() => props.history.goBack()}
            fluid
            content="Annuler"
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            fluid
            content="Effacer le formulaire"
          />
        </Grid.Column>
      </Grid>
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

export default withRouter(FormedProfileForm)
