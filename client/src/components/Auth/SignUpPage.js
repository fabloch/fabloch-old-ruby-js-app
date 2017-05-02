import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toJS } from '../hoc/toJS'
import { Grid } from 'semantic-ui-react'

import SignUpForm from './SignUpForm';
import { emailSignup } from '../../actions/signup';

const SignUpPage = ({ emailSignup }) => (
  <Grid.Column width={5} textAlign="center">
    <h1> SignUp</h1>
    <SignUpForm emailSignup={emailSignup} />
  </Grid.Column>
)

SignUpPage.propTypes = {
  emailSignup: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  emailSignup,
}

export default connect(null, mapDispatchToProps)(toJS(SignUpPage));
