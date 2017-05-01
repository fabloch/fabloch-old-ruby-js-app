import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldGroup from '../shared/FieldGroup';

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
    this.props.emailSignup(this.state)
  }

  render () {
    const { errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <FieldGroup
          id="formControlsEmail"
          type="email"
          name="email"
          label="Email address"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.onEmailChange}
          errors={errors.email}
        />

        <FieldGroup
          id="formControlsPassword"
          type="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          errors={errors.password}
        />

        <button
          type="submit"
          bsStyle="primary"
          bsSize="large"
          block
          disabled={isLoading}>
          {isLoading ? "Loading…" : "Sign Up"}
        </button>
      </form>
    )
  }
}

SignUpForm.propTypes = {
  emailSignup: PropTypes.func.isRequired,
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default SignUpForm;
