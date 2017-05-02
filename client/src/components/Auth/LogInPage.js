import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toJS } from '../hoc/toJS'
import { Grid } from 'semantic-ui-react'

import LogInForm from './LogInForm';
import { startLogin } from '../../actions/auth';
import { addNotification } from '../../actions/notifications';

const LogInPage = ({startLogin, addNotification}) => {
  return (
    <Grid.Column width={5} textAlign="center">
      <h1> LogIn</h1>
      <LogInForm
        startLogin={startLogin}
        addNotification={addNotification}
      />
    </Grid.Column>
  )
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
