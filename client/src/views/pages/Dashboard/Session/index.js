import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Grid, Segment, Header, Icon, Button } from "semantic-ui-react"

import operations from "../../../../state/ducks/session/operations"

import Show from "./Show"
import Edit from "./Edit"

class SessionPage extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      JSON.stringify(this.props) !== JSON.stringify(nextProps)
      || JSON.stringify(this.state) !== JSON.stringify(nextState)
    )
  }

  render() {
    const {
        session,
        toggleEditAccount,
    } = this.props
    return (
      <div>
        <Segment padded clearing attached="top">
          <Header
            floated="left"
            as="h1"
            color="orange"
          >
            <Icon name="sign in" />
            Identifiants de connexion
          </Header>
          <Button
            floated="right"
            to={{ pathname: "/profile/edit" }}
            content={session.isEditing ? "Annuler" : "Modifier"}
            icon={session.isEditing ? "remove" : "write"}
            labelPosition="left"
            color={session.isEditing ? "red" : "blue"}
            onClick={toggleEditAccount}
          />
        </Segment>
        <Segment
          attached="bottom"
        >
          <Grid textAlign="center">
            <Grid.Column width={5} textAlign="left">
              {session.isEditing ?
                <Edit initialValues={{ email: session.data.uid }} /> :
                <Show email={session.data.uid} />
              }
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

SessionPage.propTypes = {
  session: PropTypes.object.isRequired,
  toggleEditAccount: PropTypes.func.isRequired,
}

const mapStateToProps = ({ session }) => ({
  session: session.toJS(),
})

const connectedSessionPage = connect(
  mapStateToProps,
  operations,
)(SessionPage)

export default connectedSessionPage
