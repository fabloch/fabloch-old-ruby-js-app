import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import operations from "../../../state/ducks/profile/operations"
import Show from "./Show"
import Edit from "./Edit"

export const ProfileComponent = ({ profile }) => {

  if (profile.data) {
    return <Show {...profile.data} />
  }

  return <Edit />
}

class ProfileContainer extends Component {
  componentDidMount() {
    const { fetchProfile } = this.props
    fetchProfile()
  }

  render() {
    return <ProfileComponent {...this.props} />
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile.toJS(),
})

const ProfilePage = connect(
  mapStateToProps,
  operations,
)(ProfileContainer)

export default ProfilePage
