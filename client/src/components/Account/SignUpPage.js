import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions'

class SignUpPage extends Component {

    render () {
        const { userSignupRequest } = this.props;

        return (
          <div>
            <h1> SignUp</h1>

            <SignUpForm userSignupRequest={userSignupRequest} />
          </div>
        )
    }
}

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  userSignupRequest
}

export default connect(null, mapDispatchToProps)(SignUpPage);
