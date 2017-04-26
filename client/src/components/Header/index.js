import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => (
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
        <NavDropdown title="Account" id="account-dropdown">
          <LinkContainer to="/account/login">
            <MenuItem>Log In</MenuItem>
          </LinkContainer>
          <LinkContainer to="/account/signup">
            <MenuItem>Sign Up</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
