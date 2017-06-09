import React from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Menu, Dropdown } from "semantic-ui-react"

import MenuItem from "../../components/MenuItem"

import { sessionOperations } from "../../../state/ducks/session"

import * as routes from "../Routes"

export const Navbar = (props) => {
  const { session, logout, location } = props

  const HomeNav = () =>
    <MenuItem
      activeOnlyWhenExact
      to={{ pathname: "/" }}
      label="La FABrique du Loch"
    />

  const LeftMenu = () => {
    if (!session.data) {
      return (
        <Menu.Menu>
          <HomeNav />
          <MenuItem
            icon="home"
            to={{ pathname: routes.THE_PLACE }}
            label="Le lieu"
          />
          <MenuItem
            icon="cubes"
            to={{ pathname: routes.PROJECTS }}
            label="Les projets"
          />
          <MenuItem
            icon="users"
            to={{ pathname: routes.MEMBERS }}
            label="Les membres"
          />
          <MenuItem
            icon="file"
            to={{ pathname: routes.DOCUMENTATION }}
            label="La Doc"
          />
        </Menu.Menu>
      )
    }
    return (
      <Menu.Menu>
        <HomeNav />
        <MenuItem
          to={{ pathname: routes.MY_FABLAB }}
          label="My Fablab"
        />
        <MenuItem
          to={{ pathname: routes.CALENDAR }}
          label="Calendrier"
        />
      </Menu.Menu>
    )
  }

  const RightMenu = ({ location }) => {
    const { search } = location
    if (!session.data) {
      return (
        <Menu.Menu position="right">
          <Dropdown item icon="user">
            <Dropdown.Menu>
              <MenuItem
                icon="sign in"
                to={{
                  pathname: routes.LOGIN,
                  search,
                }}
                label="Me connecter"
              />

              <MenuItem
                icon="signup"
                to={{
                  pathname: routes.SIGNUP,
                  search,
                }}
                label="M'inscrire"
              />
            </Dropdown.Menu>
          </Dropdown>

        </Menu.Menu>
      )
    }
    return (

      <Menu.Menu position="right">
        <Dropdown item icon="user">
          <Dropdown.Menu>
            <MenuItem
              icon="dashboard"
              exact
              to={{ pathname: routes.DASHBOARD }}
              label="Dashboard"
            />
            <MenuItem
              icon="sign out"
              exact
              to={{ pathname: routes.LOGOUT }}
              label="Me déconnecter"
              onClick={logout}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )
  }

  return (
    <Menu color="orange">
      <LeftMenu />
      <RightMenu location={location} />
    </Menu>
  )
}

Navbar.propTypes = {
  session: PropTypes.shape({
    data: PropTypes.objectOf(PropTypes.string),
    isFetching: PropTypes.bool.isRequired,
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

export default withRouter(connectedNavbar)
