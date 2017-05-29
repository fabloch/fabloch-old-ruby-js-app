import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Container,
  Segment,
  Header,
  Icon,
  Divider,
  Button,
} from "semantic-ui-react"

import operations from "../../../state/ducks/subscribe/operations"

import Infos from "./Infos"
import SubscribeMessage from "./SubscribeMessage"
import History from "./History"

class MembershipPage extends Component {
  constructor(props) {
    super(props)
    this.state = { showHistory: false }
    this.showHistory = this.showHistory.bind(this)
  }

  componentDidMount() {
    const { fetchSubscriptions, subscriptions } = this.props
    if (!subscriptions) {
      fetchSubscriptions()
    }
  }

  showHistory() {
    this.setState({
      showHistory: !this.state.showHistory,
    })
  }

  render() {
    const { isFetching, subscriptions, fetchErrors } = this.props
    const { showHistory } = this.state
    return (
      <Container>
        <Segment.Group>
          <Segment padded>
            <Header as="h1" color="orange">
              <Icon name="id card outline" />
              Abonnement
            </Header>
          </Segment>
          <Segment padded loading={isFetching}>
            <SubscribeMessage
              isFetching={isFetching}
              subscriptions={subscriptions}
              fetchErrors={fetchErrors}
            />
            { subscriptions &&
              <Infos {...subscriptions} showHistory={showHistory} /> }
            { subscriptions &&
              <Container textAlign="center">
                <Divider />
                <Button
                  onClick={this.showHistory}
                  inverted
                  color="orange"
                >
                  {!showHistory ? "Voir" : "Masquer"} l'historique
                </Button>
              </Container> }
            { subscriptions && showHistory
              && <History {...subscriptions} /> }
          </Segment>
        </Segment.Group>

      </Container>
    )
  }
}

MembershipPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetchErrors: PropTypes.bool.isRequired,
  fetchSubscriptions: PropTypes.func.isRequired,
  subscriptions: PropTypes.object,
}

MembershipPage.defaultProps = {
  subscriptions: null,
}

const mapStateToProps = ({ subscribe }) => ({
  isFetching: subscribe.get("isFetching"),
  fetchErrors: subscribe.get("fetchErrors"),
  subscriptions: subscribe.get("subscriptions") && subscribe.get("subscriptions").toJS(),
})

const connectedMembershipPage = connect(
  mapStateToProps,
  operations,
)(MembershipPage)

export default connectedMembershipPage
