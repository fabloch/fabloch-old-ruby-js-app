import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addFlashMessage } from '../actions/flashMessages'

export default function (ComposedComponent) {
  class Authenticate extends Component {

    componentWillMount () {
      const { isAuthenticated, addFlashMessage, path = '/account/login' } = this.props
      if (!isAuthenticated) {
        addFlashMessage({
          type: 'danger',
          text: 'You need to log in to access this page.'
        })
        this.context.router.history.push(path)
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.history.push("/")
      }
    }

    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    path: PropTypes.string,
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  })

  const mapDisptatchToProps = {
    addFlashMessage: addFlashMessage,
  }

  return connect(mapStateToProps, mapDisptatchToProps)(Authenticate)
}
