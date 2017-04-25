import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import SignUpPage from './SignUpPage';

const Account = () => (
  <Grid>
    <Row className="show-grid">
      <Col md={4} mdOffset={4}>
        <Route path="/account/signup" component={SignUpPage} />
      </Col>
    </Row>
  </Grid>
);

export default Account;
