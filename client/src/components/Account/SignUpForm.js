import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'
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
    this.props.signupRequest(this.state)
      .then((response) => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You have signed up successfully, welcome !'
        })
        this.context.router.history.push('/');
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            errors: error.response.data.errors,
            isLoading: false
          })
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
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
  signupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default SignUpForm;
