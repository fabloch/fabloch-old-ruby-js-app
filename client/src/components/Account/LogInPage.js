import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import LogInForm from './LogInForm';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/auth';
import { addFlashMessage } from '../../actions/flashMessages';

class LogInPage extends Component {

    render () {
        const { loginRequest, addFlashMessage } = this.props;

        return (
          <div>
            <h1> LogIn</h1>

            <LogInForm
              loginRequest={loginRequest}
              addFlashMessage={addFlashMessage}
            />
          </div>
        )
    }
}

LogInPage.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  loginRequest,
  addFlashMessage,
}

export default connect(null, mapDispatchToProps)(LogInPage);
