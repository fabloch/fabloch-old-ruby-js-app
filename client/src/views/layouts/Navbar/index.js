import React from "react"
import PropTypes from "prop-types"
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { Menu } from "semantic-ui-react"

import { authOperations } from "../../../state/ducks/auth"

const MenuItem = ({ label, to, activeOnlyWhenExact, onClick }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Menu.Item
        as={Link}
        to={to}
        active={match} // TODO problem with match not updating
        onClick={onClick}
      >
        {label}
      </Menu.Item>
    )}
  />
)

export const Navbar = ({ auth, logout }, { router }) => {
  const LeftMenu = () => (
    <Menu.Menu>
      <MenuItem
        activeOnlyWhenExact={true}
        to="/"
        label="La FABrique du Loch"
      />
      <MenuItem
        to="/myfablab"
        label="My Fablab"
      />
    </Menu.Menu>
  )

  const RightMenu = () => {
    if (!auth.isAuthenticated) {
      return (
        <Menu.Menu position="right">
          <MenuItem
            to="/auth/login"
            label="Me connecter"
          />

          <MenuItem
            to="/auth/signup"
            label="M'inscrire"
          />
        </Menu.Menu>
      )
    }
    return (
      <Menu.Menu position="right">
        <MenuItem
          to="/auth/logout"
          label="Me déconnecter"
          onClick={logout}
        />
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
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isSigningIn: PropTypes.bool.isRequired,
    userData: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  logout: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  auth: state.auth.toJS(),
})

const mapDisptatchToProps = {
  logout: authOperations.logout,
}

const connectedNavbar = connect(mapStateToProps, mapDisptatchToProps)(Navbar)

export default connectedNavbar
