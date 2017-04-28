import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import LogInForm from './LogInForm';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { addNotification } from '../../actions/notifications';

class LogInPage extends Component {

    render () {
        const { startLogin, addNotification } = this.props;

        return (
          <div>
            <h1> LogIn</h1>

            <LogInForm
              startLogin={startLogin}
              addNotification={addNotification}
            />
          </div>
        )
    }
}

LogInPage.propTypes = {
  startLogin: PropTypes.func.isRequired,
  addNotification: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  startLogin,
  addNotification,
}

export default connect(null, mapDispatchToProps)(LogInPage);
