import React from "react"
import PropTypes from "prop-types"
import { Route, Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"

const MenuItem = ({
  label,
  to,
  activeOnlyWhenExact,
  onClick,
}) => (
  <Route
    path={to.pathname}
    exact={activeOnlyWhenExact}
  >
    {({ match }) => (
      <Menu.Item
        as={Link}
        to={to}
        active={match && true}
        onClick={onClick}
      >
        {label}
      </Menu.Item>
    )}
  </Route>
)

MenuItem.propTypes = {
  label: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  activeOnlyWhenExact: PropTypes.bool,
  onClick: PropTypes.func,
}

MenuItem.defaultProps = {
  label: "",
  to: "",
  activeOnlyWhenExact: false,
  onClick: undefined,
}

export default MenuItem
