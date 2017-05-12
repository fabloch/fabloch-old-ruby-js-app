import React from "react"
import PropTypes from "prop-types"

export default function Admin({ authData }) {
  return <div>{`Welcome admin user: ${authData.name}`}</div>
}

Admin.propTypes = {
  authData: PropTypes.object,
}
