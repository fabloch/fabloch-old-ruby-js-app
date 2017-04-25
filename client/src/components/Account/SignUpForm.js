import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button } from 'react-bootstrap'

const FieldGroup = ({ id, label, help, ...props }) => (
  <FormGroup controlId={id}>
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
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit (e) {
    e.preventDefault();
    console.log(this.state);

  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <FieldGroup
          id="formControlsEmail"
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <FieldGroup
          id="formControlsPassword"
          name="password"
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.onChange}
        />

        <Button type="submit">
          Sign Up
        </Button>
      </form>
    )
  }
}

export default SignUpForm;
