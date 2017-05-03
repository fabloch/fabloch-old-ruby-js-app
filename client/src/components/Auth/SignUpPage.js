import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toJS } from '../hoc/toJS'
import { Grid } from 'semantic-ui-react'
import { emailSignup } from '../../actions/signup'
// import showResults from './showResults'

import SignUpForm from './SignUpForm';

const SignUpPage = () => (
  <Grid.Column width={5} textAlign="center">
    <h1> SignUp</h1>
    <SignUpForm onSubmit={emailSignup} />
  </Grid.Column>
)

export default SignUpPage;
