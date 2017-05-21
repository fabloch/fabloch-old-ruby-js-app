import React from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Menu } from "semantic-ui-react"

import MenuItem from "../../components/MenuItem"

import { sessionOperations } from "../../../state/ducks/session"


export const Navbar = (props) => {
  const { session, logout, location } = props

  const LeftMenu = () => (
    <Menu.Menu>
      <MenuItem
        activeOnlyWhenExact
        to={{ pathname: "/" }}
        label="La FABrique du Loch"
      />
      <MenuItem
        to={{ pathname: "/myfablab" }}
        label="My Fablab"
      />
    </Menu.Menu>
  )

  const RightMenu = ({ location }) => {
    const { search } = location
    if (!session.data) {
      return (
        <Menu.Menu position="right">
          <MenuItem
            to={{
              pathname: "/session/login",
              search,
            }}
            label="Me connecter"
          />

          <MenuItem
            to={{
              pathname: "/session/signup",
              search,
            }}
            label="M'inscrire"
          />
        </Menu.Menu>
      )
    }
    return (
      <Menu.Menu position="right">
        <MenuItem
          exact
          to={{ pathname: "/" }}
          label="Me déconnecter"
          onClick={logout}
        />
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

export default withRouter(connectedNavbar)
