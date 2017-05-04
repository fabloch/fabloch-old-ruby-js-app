import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addNotification } from "../../state/ducks/notification/actions"

export default function (ComposedComponent) {
  class Authenticate extends Component {

    componentWillMount() {
      const { isAuthenticated, addNotification, path = "/account/login" } = this.props
      if (!isAuthenticated) {
        addNotification({
          type: "danger",
          text: "You need to log in to access this page.",
        })
        this.context.router.history.push(path)
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.history.push("/")
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired,
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addNotification: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  })

  const mapDisptatchToProps = {
    addNotification,
  }

  return connect(mapStateToProps, mapDisptatchToProps)(Authenticate)
}
