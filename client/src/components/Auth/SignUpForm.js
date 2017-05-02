import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FieldGroup from '../shared/FieldGroup';
import { Form, Button } from 'semantic-ui-react'

const SignUpForm = () => {
  // const { errors, isLoading } = this.state;
  return (
    <Form>
      <Form.Field>
        {/* <label>Email address</label> */}
        <input type="email" placeholder="Enter email" />
      </Form.Field>
        {/* id="formControlsEmail"
        type="email"
        name="email"
        label="Email address"
        placeholder="Enter email"
        // value={this.state.email}
        // onChange={this.onEmailChange}
        // errors={errors.email} */}

      <Form.Field>
        {/* <label>Password</label> */}
        <input type="password" placeholder="Enter password" />
      </Form.Field>
        {/* id="formControlsPassword"
        type="password"
        name="password"
        label="Password"
        placeholder="Enter password"
        // value={this.state.password}
        // onChange={this.onPasswordChange}
        // errors={errors.password}
      /> */}

      <Button
        type="submit"
        fluid
        primary
      >
        Sign Up
      </Button>
    </Form>
  )
}

SignUpForm.propTypes = {
  emailSignup: PropTypes.func.isRequired,
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default SignUpForm;

// constructor(props) {
//   super(props);
//   this.state = {
//     email: '',
//     password: '',
//     password_confirmation: '',
//     errors: {},
//     isLoading: false,
//   }
//   this.onEmailChange = this.onEmailChange.bind(this);
//   this.onPasswordChange = this.onPasswordChange.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);
// }
//
// onEmailChange (e) {
//   this.setState({
//     email: e.target.value
//   });
// }
//
// onPasswordChange (e) {
//   this.setState({
//     password: e.target.value,
//     password_confirmation: e.target.value,
//   });
// }
//
// onSubmit (e) {
//   this.setState({ errors: {}, isLoading: true });
//   e.preventDefault();
//   this.props.emailSignup(this.state)
// }
//
