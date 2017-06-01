import React from "react"
import PropTypes from "prop-types"
// import { Grid, Card, Image, Icon } from "semantic-ui-react"

const Private = ({ username, firstname, lastname, description }) => (
  <div>
    Infos personnelles.
    {username}, {firstname}, {lastname}, {description}.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
  </div>
)

Private.propTypes = {
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  description: PropTypes.string,
}

Private.defaultProps = {
  firstname: "",
  lastname: "",
  description: "",
}

export default Private
