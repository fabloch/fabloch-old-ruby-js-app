import React from "react"
import PropTypes from "prop-types"
import { Route, Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

const NavButton = ({
  type,
  to,
  onClick,
  content,
  primary,
  secondary,
  fluid,
  disabled,
  basic,
  color,
  icon,
  labelPosition,
  size,
}) =>
  <Route
    path={to}
  >
    {({ match }) => (
      <Button
        type={type}
        as={Link}
        to={to}
        active={match && true}
        onClick={onClick}
        content={content}
        primary={primary}
        secondary={secondary}
        fluid={fluid}
        disabled={disabled}
        basic={basic}
        color={color}
        icon={icon}
        labelPosition={labelPosition}
        size={size}
      />
    )}
  </Route>

NavButton.propTypes = {
  type: PropTypes.string,
  to: PropTypes.object,
  onClick: PropTypes.func,
  content: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  basic: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.string,
  labelPosition: PropTypes.string,
}

NavButton.defaultProps = {
  type: "",
  to: {},
  onClick: undefined,
  content: undefined,
  primary: false,
  secondary: false,
  fluid: false,
  disabled: false,
  basic: false,
  color: undefined,
  icon: undefined,
  labelPosition: undefined,
}

export default NavButton
