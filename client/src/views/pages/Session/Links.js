import React from "react"
import { Grid, Button } from "semantic-ui-react"
import NavButton from "../../components/NavButton"

import * as routes from "../../layouts/Routes"

const Links = () =>
  <Grid textAlign="center">
    <Grid.Column>
      <Button.Group color='blue'>
        <NavButton
          to={{ pathname: routes.SIGNUP }}
          content="S'inscrire"
          size="mini"
          basic
          color="blue"
        />
        <NavButton
          to={{ pathname: routes.LOGIN }}
          content="Se connecter"
          size="mini"
          basic
          color="blue"
        />
        <NavButton
          to={{ pathname: routes.FORGOT_PASSWORD }}
          content="Mot de passe oublié"
          size="mini"
          basic
          color="blue"
        />
      </Button.Group>
    </Grid.Column>
  </Grid>

export default Links
