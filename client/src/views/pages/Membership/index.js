import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Segment, Header, Icon } from "semantic-ui-react"

import PresentMembership from "./PresentMembership"
import RenewMessage from "./RenewMessage"
import History from "./History"

import { subShouldRenew90 } from "../../../api/fake/subscriptions"

const MembershipPage = ({ membership }) => {
  const {
    isFetching,
    presentMembership,
    shouldResubscribe,
    pastMemberships,
  } = membership
  return (
    <div>
      <Segment.Group>
        <Segment padded>
          <Header as="h1" color="orange">
            <Icon name="id card outline" />
            Abonnement
          </Header>
        </Segment>
        <Segment padded loading={isFetching}>
          {shouldResubscribe && <RenewMessage shouldResubscribe={shouldResubscribe} />}
          {presentMembership && <PresentMembership presentMembership={presentMembership} />}
          {
            pastMemberships
            && pastMemberships.show
            && <History pastMemberships={pastMemberships} />
          }
        </Segment>
      </Segment.Group>

    </div>
  )
}

MembershipPage.propTypes = {
  membership: PropTypes.object.isRequired,
}

const mapStateToProps = () => ({
  membership: subShouldRenew90,
})

const connectedMembershipPage = connect(
  mapStateToProps,
  null,
)(MembershipPage)

export default connectedMembershipPage
