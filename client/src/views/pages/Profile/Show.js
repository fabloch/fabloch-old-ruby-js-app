import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Grid } from "semantic-ui-react"

import operations from "../../../state/ducks/profile/operations"

import PublicCard from "./PublicCard"
import Private from "./Private"

class Show extends Component {
  componentDidMount() {
    console.log("this props", this.props)
    const { fetchProfile } = this.props
    fetchProfile()
  }

  componentWillUpdate(nextProps) {
    console.log("next props", nextProps)
    const { history } = this.props
    if (nextProps.profile.errors) {
      history.push("/profile/edit")
    }
  }

  render() {
    const { profile } = this.props
    return (
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <PublicCard {...profile.data} />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={12}>
          <Private {...profile.data} />
        </Grid.Column>
      </Grid>
    )
  }
}

// Show.propTypes = {
//   profile: PropTypes.objectOf(PropTypes.string).isRequired,
//   fetchProfile: PropTypes.func.isRequired,
// }
//
// Show.defaultProps = {
//   firstname: "",
//   lastname: "",
//   description: "",
//   birthday: "",
// }
//
const mapStateToProps = state => ({
  profile: state.profile.toJS(),
})

const connectedShow = connect(
  mapStateToProps,
  operations,
)(Show)

export default withRouter(connectedShow)
