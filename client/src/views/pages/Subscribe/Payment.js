import React from "react"
import { Grid, Segment, Header, Button, Icon } from "semantic-ui-react"

const Payment = ({ selectPaymentMethod }) =>
  <Segment>
    <Grid
      stackable
      columns={2}
      divided
      padded
      textAlign="center"
    >
      <Grid.Column>
        <Header as="h2" color="orange" icon>
          <Icon name="money" />
          Chèque, espèce
          <Header.Subheader>
            Votre compte sera validé à réception de votre paiement
            par nos gentils FABmanagers.
          </Header.Subheader>
        </Header>
        <Button
          icon="chevron right"
          labelPosition="right"
          content="Payer plus tard par chèque ou espèce"
          color="green"
          size="big"
          onClick={() => selectPaymentMethod("checkOrCash")}
          fluid
        />
      </Grid.Column>
      <Grid.Column>
        <Header as="h2" color="orange" icon>
          <Icon name="credit card" />
          Carte bancaire
          <Header.Subheader>
            Votre compte est validé immédiatement.
            Le Paiement est sécurisé par Stripe®.

          </Header.Subheader>
        </Header>
        <Button
          icon="chevron right"
          labelPosition="right"
          content="Remplir le formulaire sécurisé"
          color="green"
          size="big"
          onClick={() => selectPaymentMethod("card")}
          fluid
        />
      </Grid.Column>
    </Grid>
  </Segment>

export default Payment
