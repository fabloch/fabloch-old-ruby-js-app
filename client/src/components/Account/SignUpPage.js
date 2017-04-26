import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { signupRequest } from '../../actions/auth';
import { addFlashMessage } from '../../actions/flashMessages';

class SignUpPage extends Component {

    render () {
        const { signupRequest, addFlashMessage } = this.props;

        return (
          <div>
            <h1> SignUp</h1>

            <SignUpForm
              signupRequest={signupRequest}
              addFlashMessage={addFlashMessage}
            />
          </div>
        )
    }
}

SignUpPage.propTypes = {
  signupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  signupRequest,
  addFlashMessage,
}

export default connect(null, mapDispatchToProps)(SignUpPage);
