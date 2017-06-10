import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Segment, Header, Icon, Button } from "semantic-ui-react"

import operations from "../../../../state/ducks/profile/operations"

import Show from "./Show"
import Edit from "./Edit"

class ProfilePage extends Component {
  componentDidMount() {
    const { fetchProfile, profile } = this.props
    if (!profile.data) {
      fetchProfile()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      JSON.stringify(this.props) !== JSON.stringify(nextProps)
      || JSON.stringify(this.state) !== JSON.stringify(nextState)
    )
  }

  render() {
    const { profile, toggleEdit } = this.props

    const Content = () => {
      if (profile.isEditing || profile.errors) {
        return <Edit profile={profile} />
      }
      return <Show profile={profile} />
    }

    return (
      <div>
        <Segment padded clearing attached="top">
          <Header
            floated="left"
            as="h1"
            color="orange"
          >
            <Icon name="address card" />
            Profil
          </Header>
          { profile.data && <Button
            floated="right"
            to={{ pathname: "/profile/edit" }}
            content={profile.isEditing ? "Annuler" : "Modifier"}
            icon={profile.isEditing ? "remove" : "write"}
            labelPosition="left"
            color={profile.isEditing ? "red" : "blue"}
            onClick={toggleEdit}
          />}
        </Segment>
        <Segment
          loading={profile.isFetching}
          padded
          attached="bottom"
        >
          <Content />
        </Segment>
      </div>
    )
  }
}

ProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
}

const mapStateToProps = ({ profile }) => ({
  profile: profile.toJS(),
})

const connectedProfilePage = connect(
  mapStateToProps,
  operations,
)(ProfilePage)


export default connectedProfilePage
