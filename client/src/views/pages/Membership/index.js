import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Segment, Header, Icon } from "semantic-ui-react"

import PresentMembership from "./PresentMembership"
import RenewMessage from "./RenewMessage"
import Subscribe from "./Subscribe"
import History from "./History"

import membershipFakeData from "./fakeData/membership"

const MembershipPage = ({ membership }) => {
  const {
    isLoading,
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
        <Segment padded loading={isLoading}>
          {shouldResubscribe && <RenewMessage shouldResubscribe={shouldResubscribe} />}
          {presentMembership && <PresentMembership presentMembership={presentMembership} />}
          {
            pastMemberships
            && pastMemberships.show
            && <History pastMemberships={pastMemberships} />
          }
          {
            (shouldResubscribe || pastMemberships || !presentMembership) &&
            <Subscribe {...membership} />
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
  membership: membershipFakeData,
})

const connectedMembershipPage = connect(
  mapStateToProps,
  null,
)(MembershipPage)

export default connectedMembershipPage
