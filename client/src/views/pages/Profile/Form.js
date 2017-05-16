import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"

import { Form as UIForm, Grid, Button } from "semantic-ui-react"
import NavButton from "../../components/NavButton"

import { renderField } from "../../components/renderField"
import { profileOperations } from "../../../state/ducks/profile"

const Form = (props) => {
  const { initialValues, postProfile, errors, handleSubmit, pristine, reset, submitting } = props

  return (
    <UIForm onSubmit={handleSubmit(postProfile)}>
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
    </UIForm>
  )
}

Form.propTypes = {
  postProfile: PropTypes.func.isRequired,
  errors: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  // validate: PropTypes.func.isRequired,
  // warn: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

Form.defaultProps = {
  errors: null,
}

const mapDispatchToProps = {
  postProfile: profileOperations.postProfile,
}

const connectForm1 = connect(
  null,
  mapDispatchToProps,
)(Form)


const connectForm2 = reduxForm({
  form: "profile",
  // validate,
  // warn,
  // asyncValidate,
})(connectForm1)

const mapStateToProps = state => ({
  initialValues: state.profile.get("data"),
})

const connectForm3 = connect(
  mapStateToProps,
  null,
)(connectForm2)

export default connectForm3
