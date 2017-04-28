import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Alert } from 'react-bootstrap'
import FieldGroup from '../shared/FieldGroup';
import validateInput from '../../validations/login';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
    this.isValidFunc()
  }


  onSubmit (e) {
    e.preventDefault();
    if (this.isValidFunc()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.startLogin(this.state)
      .then(
        (res) => {
          this.props.addNotification({
            type: 'success',
            text: 'You are logged in successfully, welcome back !'
          })
          this.context.router.history.push('/');
        }
      ).catch(
        (error) => {
          if (error.response) {
            console.log(error.response)
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
        }
      )
    }
  }

  isValidFunc () {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({errors})
    } else {
      this.setState({errors: {}})
    }

    return isValid;
  }

  render () {
    const { errors, isLoading } = this.state;
    return (
      <div>
        { errors && errors.constructor === Array && <Alert bsStyle="danger">{errors[0]}</Alert> }
        <form onSubmit={this.onSubmit}>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            name="email"
            label="Email address"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.onChange}
            errors={errors.email}
          />

          <FieldGroup
            id="formControlsPassword"
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.onChange}
            errors={errors.password}
          />

          <Button
            type="submit"
            bsStyle="primary"
            bsSize="large"
            block
            disabled={isLoading}>
            {isLoading ? "Loading…" : "Log In"}
          </Button>
        </form>
      </div>
    )
  }
}

LogInForm.propTypes = {
  startLogin: PropTypes.func.isRequired,
  addNotification: PropTypes.func.isRequired,
}

LogInForm.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default LogInForm;
