import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
import {
  Grid,
  Header,
  Icon,
  Statistic,
} from "semantic-ui-react"

import { planType } from "./utils"

const Infos = ({
  plan,
  memberUntil,
  memberUntilFromNow,
  memberUntilFromNowInDays,
  memberSince,
  memberSinceFromNow,
  memberSinceFromNowInDays,
}) => {

  return (
    <Grid textAlign="center">
      <Grid.Column>
        <Header as="h2" icon>
          <Icon name="star" circular />
          <Header.Content>
            Votre abonnement à la fabrique
          </Header.Content>
          { " " }
        </Header>
        <Statistic.Group widths="3">
          <Statistic color="orange">
            <Statistic.Label>
              Type d'abonnement
            </Statistic.Label>
            <Statistic.Value text>
              { planType(plan) }
            </Statistic.Value>
          </Statistic>
          <Statistic color="orange">
            <Statistic.Label>
              {memberUntilFromNowInDays > 0 ? "Abonné.e jusqu'au" : "Plus abonné.e depuis" }
            </Statistic.Label>
            <Statistic.Value text>
              {moment(memberUntil).format("LL")}
            </Statistic.Value>
          </Statistic>
          <Statistic color="orange">
            <Statistic.Label>
              Première arrivée le
            </Statistic.Label>
            <Statistic.Value text>
              {moment(memberSince).format("LL")}
            </Statistic.Value>
          </Statistic>
        </Statistic.Group>
      </Grid.Column>
    </Grid>
  )
}

Infos.propTypes = {
  memberUntil: PropTypes.string.isRequired,
  memberUntilFromNow: PropTypes.string.isRequired,
  memberSince: PropTypes.string.isRequired,
  memberSinceFromNow: PropTypes.string.isRequired,
}

export default Infos
