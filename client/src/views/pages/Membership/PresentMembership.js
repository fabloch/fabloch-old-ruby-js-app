import React from "react"
import PropTypes from "prop-types"
import { Header, Button } from "semantic-ui-react"

const PresentMembership = ({ presentMembership }) =>
  <div>
    <Header>
      Abonnement actuel
      { " " }
      <Button size="mini">Voir l'historique</Button>
    </Header>
    <ul>
      <li>{presentMembership.type}</li>
      <li>{presentMembership.startDate}</li>
      <li>{presentMembership.endDate}</li>
      <li>{presentMembership.price}</li>
      <li>{presentMembership.paymentMethod}</li>
    </ul>
  </div>

PresentMembership.propTypes = {
  presentMembership: PropTypes.object.isRequired,
}

export default PresentMembership
