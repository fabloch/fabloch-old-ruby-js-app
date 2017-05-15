import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchProfile } from "../../../api"
import actions from "../../../state/ducks/profile/actions"
import Show from "./Show"
import Edit from "./Edit"

export const ProfileComponent = ({ profile }) => {

  if (profile.data) {
    return(<Show {...profile.data} />)
  }

  return(<Edit />)
}

class ProfileContainer extends Component {
  componentDidMount() {
    console.log(this.props)
    const { fetchProfileSuccess } = this.props
    fetchProfile().then(
      profile => fetchProfileSuccess(profile))
  }

  render() {
    return <ProfileComponent {...this.props} />
  }
}

const mapStateToProps = state => ({
  profile: state.profile.toJS(),
})

const ProfilePage = connect(
  mapStateToProps,
  actions,
)(ProfileContainer)

export default ProfilePage
