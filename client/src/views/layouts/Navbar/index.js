import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// import { logout } from "../../actions/auth"

import { Menu } from "semantic-ui-react"

export const Navbar = ({ pathname }, { router }) => {
  // const { isAuthenticated } = auth
  return (
    <Menu>
      <Menu.Menu>
        <Menu.Item
          active={pathname === "/" && true}
          onClick={() => router.history.push("/")}
        >
          La FABrique du Loch
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item
          active={pathname === "/account/signup" && true}
          onClick={() => router.history.push("/account/signup")}
        >
          Sign Up
        </Menu.Item>
        <Menu.Item
          active={pathname === "/account/login" && true}
          onClick={() => router.history.push("/account/login")}
        >
          Log In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

Navbar.contextTypes = {
  router: PropTypes.object.isRequired,
}

Navbar.propTypes = {
  pathname: PropTypes.string.isRequired,
  // auth: PropTypes.object.isRequired,
  // logout: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
  // auth: state.auth,
  pathname: state.router.location.pathname
})

const mapDisptatchToProps = {
  // logout,
}

const connectedNavbar = connect(mapStateToProps, mapDisptatchToProps)(Navbar)

export default connectedNavbar
