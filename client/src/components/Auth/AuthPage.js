import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';

const Auth = () => (
  <Grid>
    <Row className="show-grid">
      <Col md={4} mdOffset={4}>
        <Route path="/account/signup" component={SignUpPage} />
        <Route path="/account/login" component={LogInPage} />
      </Col>
    </Row>
  </Grid>
);

export default Auth;
