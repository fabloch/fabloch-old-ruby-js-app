import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signup';
import { addFlashMessage } from '../../actions/flashMessages';

class SignUpPage extends Component {

    render () {
        const { userSignupRequest, addFlashMessage } = this.props;

        return (
          <div>
            <h1> SignUp</h1>

            <SignUpForm
              userSignupRequest={userSignupRequest}
              addFlashMessage={addFlashMessage}
            />
          </div>
        )
    }
}

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  userSignupRequest,
  addFlashMessage,
}

export default connect(null, mapDispatchToProps)(SignUpPage);
