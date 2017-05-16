import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Segment, Header, Icon, Button } from "semantic-ui-react"

import operations from "../../../state/ducks/profile/operations"

import Show from "./Show"
import Edit from "./Edit"

class ProfilePage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { isEditing: false }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

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

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const { profile, submit } = this.props
    const { isEditing } = this.state

    const Content = () => {
      if (isEditing || profile.errors) {
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
            <Icon name="id card outline" />
            Profil
          </Header>
          <Button
            floated="right"
            to="/profile/edit"
            content="Edit"
            icon="write"
            labelPosition="left"
            onClick={this.toggleEdit}

          />

          {/* <Actions isEditing={isEditing} /> */}
        </Segment>
        <Segment padded attached="bottom">
          <Content />
        </Segment>
      </div>
    )
  }
}

ProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}

const mapStateToProps = ({profile}) => ({
  profile: profile.toJS(),
})

const connectedProfilePage = connect(
  mapStateToProps,
  operations,
)(ProfilePage)


export default connectedProfilePage
