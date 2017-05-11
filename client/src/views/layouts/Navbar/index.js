import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Menu } from "semantic-ui-react"
import { authOperations } from "../../../state/ducks/auth"

export const Navbar = ({ pathname, auth, logout }, { router }) => {
  const LeftMenu = () => (
    <Menu.Menu>
      <Menu.Item
        active={pathname === "/" && true}
        onClick={() => router.history.push("/")}
      >
        La FABrique du Loch
      </Menu.Item>
    </Menu.Menu>
  )

  const RightMenu = () => {
    if (!auth.isAuthenticated) {
      return (
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
      )
    }
    return (
      <Menu.Menu position="right">
        <Menu.Item
          active={pathname === "/account/login" && true}
          onClick={logout}
        >
          Log Out
        </Menu.Item>
      </Menu.Menu>
    )
  }

  return (
    <Menu>
      <LeftMenu />
      <RightMenu />
    </Menu>
  )
}

Navbar.contextTypes = {
  router: PropTypes.object.isRequired,
}

Navbar.propTypes = {
  pathname: PropTypes.string.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isSigningIn: PropTypes.bool.isRequired,
    userData: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  logout: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  auth: state.auth.toJS(),
  pathname: state.router.location.pathname,
})

const mapDisptatchToProps = {
  logout: authOperations.logout,
}

const connectedNavbar = connect(mapStateToProps, mapDisptatchToProps)(Navbar)

export default connectedNavbar
