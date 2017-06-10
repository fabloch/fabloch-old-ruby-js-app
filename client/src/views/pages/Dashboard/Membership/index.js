import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import isEmpty from "lodash/isEmpty"

import {
  Container,
  Segment,
  Header,
  Icon,
  Divider,
  Button,
} from "semantic-ui-react"

import operations from "../../../../state/ducks/subscribe/operations"

import Infos from "./Infos"
import SubscribeMessage from "./SubscribeMessage"
import History from "./History"

class MembershipPage extends Component {
  constructor(props) {
    super(props)
    this.state = { showAll: false }
    this.handleShowAll = this.handleShowAll.bind(this)
  }

  componentDidMount() {
    const { fetchSubscriptions, present } = this.props
    if (isEmpty(present)) {
      fetchSubscriptions()
    }
  }

  handleShowAll() {
    this.setState({
      showAll: !this.state.showAll,
    })
  }

  render() {
    const { isLoading, present, all, loadErrors } = this.props
    const { showAll } = this.state
    return (
      <Container>
        <Segment.Group>
          <Segment padded>
            <Header as="h1" color="orange">
              <Icon name="certificate" />
              Abonnement
            </Header>
          </Segment>
          <Segment padded loading={isLoading}>
            <SubscribeMessage
              isLoading={isLoading}
              present={present}
              loadErrors={loadErrors}
            />
            { !isEmpty(present) &&
              <Infos {...present} /> }
            { !isEmpty(present) &&
              <Container textAlign="center">
                <Divider />
                <Button
                  onClick={this.handleShowAll}
                  inverted
                  color="orange"
                >
                  {!showAll ? "Voir" : "Masquer"} l'historique
                </Button>
              </Container> }
            { !isEmpty(all) && showAll &&
              <History all={all} /> }
          </Segment>
        </Segment.Group>

      </Container>
    )
  }
}

MembershipPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadErrors: PropTypes.bool.isRequired,
  fetchSubscriptions: PropTypes.func.isRequired,
  present: PropTypes.object.isRequired,
  all: PropTypes.array.isRequired,
}

const mapStateToProps = ({ subscribe }) => ({
  isLoading: subscribe.get("isLoading"),
  loadErrors: subscribe.get("loadErrors"),
  present: subscribe.get("present").toJS(),
  all: subscribe.get("all").toJS(),
})

const connectedMembershipPage = connect(
  mapStateToProps,
  operations,
)(MembershipPage)

export default connectedMembershipPage
