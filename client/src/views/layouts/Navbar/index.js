import React from "react"
import PropTypes from "prop-types"
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { Menu } from "semantic-ui-react"

import { sessionOperations } from "../../../state/ducks/session"

const MenuItem = ({ label, to, activeOnlyWhenExact, onClick }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Menu.Item
        as={Link}
        to={to}
        active={match && true}
        onClick={onClick}
      >
        {label}
      </Menu.Item>
    )}
  />
)

export const Navbar = ({ session, logout }, { router }) => {
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
    if (!session.data) {
      return (
        <Menu.Menu position="right">
          <MenuItem
            to="/session/login"
            label="Me connecter"
          />

          <MenuItem
            to="/session/signup"
            label="M'inscrire"
          />
        </Menu.Menu>
      )
    }
    return (
      <Menu.Menu position="right">
        <MenuItem
          to="/session/logout"
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
  session: PropTypes.shape({
    data: PropTypes.objectOf(PropTypes.string),
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  session: state.session.toJS(),
})

const mapDisptatchToProps = {
  logout: sessionOperations.logout,
}

const connectedNavbar = connect(mapStateToProps, mapDisptatchToProps)(Navbar)

export default connectedNavbar
