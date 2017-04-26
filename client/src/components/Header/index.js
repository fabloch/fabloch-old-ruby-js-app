import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { logoutRequest } from '../../actions/auth'

const Header = ({auth, logoutRequest}) => {
  const { isAuthenticated } = auth

  const userLinks = (
    <NavDropdown title="User account" id="account-dropdown">
      <MenuItem onClick={logoutRequest}>Log out</MenuItem>
    </NavDropdown>
  )

  const guestLinks = (
    <NavDropdown title="Account" id="account-dropdown">
      <LinkContainer to="/account/login">
        <MenuItem>Log In</MenuItem>
      </LinkContainer>
      <LinkContainer to="/account/signup">
        <MenuItem>Sign Up</MenuItem>
      </LinkContainer>
    </NavDropdown>
  )

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to="/">
            <a href="#">FABLoch</a>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>Contact</NavItem>
          </LinkContainer>
        </Nav>

        <Nav pullRight>
          { isAuthenticated ? userLinks : guestLinks }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDisptatchToProps = {
  logoutRequest,
}

const connectedHeader = connect(mapStateToProps, mapDisptatchToProps)(Header)

export default connectedHeader;
