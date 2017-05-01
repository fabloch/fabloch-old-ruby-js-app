import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/auth'

import { Menu } from "semantic-ui-react"

const Navbar = ({}, context) => {
  // const { isAuthenticated } = auth
  console.log(context.router.history.location.pathname)

  return (
    <Menu>
      <Menu.Menu>
        <Menu.Item
          active={ context.router.history.location.pathname === "/" && true}
          onClick={() => context.router.history.push('/')}>
          La FABrique du Loch
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item
          active={ context.router.history.location.pathname === "/account/signup" && true}
          onClick={() => context.router.history.push('/account/signup')}>
          Sign Up
        </Menu.Item>
        <Menu.Item
          active={ context.router.history.location.pathname === "/account/login" && true}
          onClick={() => context.router.history.push('/account/login')}>
          Log In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

Navbar.contextTypes = {
  router: PropTypes.object.isRequired,
}

// Navbar.propTypes = {
//   auth: PropTypes.object.isRequired,
//   logoutRequest: PropTypes.func.isRequired,
// }


const mapStateToProps = (state) => ({
  // auth: state.auth,
})

const mapDisptatchToProps = {
  // logoutRequest,
}

const connectedNavbar = connect(mapStateToProps, mapDisptatchToProps)(Navbar)

export default connectedNavbar;
