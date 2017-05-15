import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Loader as UILoader, Dimmer } from "semantic-ui-react"

const Loader = ({ isLoading }) =>
  <Dimmer active={isLoading}>
    <UILoader active={isLoading}>Chargement</UILoader>
  </Dimmer>

const mapStateToProps = state => ({
  isLoading: state.loading.get("isLoading"),
})

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

const ConnectedLoader = connect(mapStateToProps, null)(Loader)

export default ConnectedLoader
