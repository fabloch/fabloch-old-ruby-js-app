import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { emailSignup } from '../../actions/auth';
import { addNotification } from '../../actions/notifications';

class SignUpPage extends Component {

    render () {
        const { emailSignup, addNotification } = this.props;

        return (
          <div>
            <h1> SignUp</h1>

            <SignUpForm
              emailSignup={emailSignup}
              addNotification={addNotification}
            />
          </div>
        )
    }
}

SignUpPage.propTypes = {
  emailSignup: PropTypes.func.isRequired,
  addNotification: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  emailSignup,
  addNotification,
}

export default connect(null, mapDispatchToProps)(SignUpPage);
