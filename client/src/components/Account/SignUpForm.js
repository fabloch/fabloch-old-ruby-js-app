import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button } from 'react-bootstrap'

const FieldGroup = ({ id, label, help, validationState, ...props }) => (
  <FormGroup controlId={id} validationState={validationState}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
      isLoading: false,
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange (e) {
    this.setState({
      email: e.target.value
    });
  }

  onPasswordChange (e) {
    this.setState({
      password: e.target.value,
      password_confirmation: e.target.value,
    });
  }

  onSubmit (e) {
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();
    this.props.userSignupRequest(this.state)
      .then(() => {})
      .catch((error) => {
        this.setState({
          errors: error.response.data.errors,
          isLoading: false
        })
      })
  }

  render () {
    const { errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <FieldGroup
          validationState={errors.email ? 'error' : null}
          id="formControlsEmail"
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.onEmailChange}
          help={errors.email && errors.email.join(', ')}
        />
        <FieldGroup
          validationState={errors.password ? 'error' : null}
          id="formControlsPassword"
          name="password"
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          help={errors.password && errors.password.join(', ')}
        />
        <Button
          type="submit"
          bsStyle="primary"
          bsSize="large"
          block
          disabled={isLoading}>
          {isLoading ? "Loading…" : "Sign Up"}
        </Button>
      </form>
    )
  }
}

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
}

export default SignUpForm;
