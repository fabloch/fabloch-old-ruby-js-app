import React from 'react';
import { PropTypes } from 'prop-types';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { emailSignup } from '../../actions/signup';

const SignUpPage = ({ emailSignup }) => (
  <div>
    <h1> SignUp</h1>

    <SignUpForm
      emailSignup={emailSignup}
    />
  </div>
)

SignUpPage.propTypes = {
  emailSignup: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  emailSignup,
}

export default connect(null, mapDispatchToProps)(SignUpPage);
