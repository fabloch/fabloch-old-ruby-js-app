import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"
import { Grid, Message, Icon } from "semantic-ui-react"

import * as routes from "../../layouts/Routes"

import Signup from "./Signup"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import Links from "./Links"

const Home = () =>
  <div>Session Home</div>

const Session = ({ location }) => {
  const RedirectMessage = () => {
    if (location.search) {
      return (
        <Grid padded>
          <Grid.Column>
            <Message info icon>
              <Icon name="sign in" />
              <Message.Content>
                <Message.Header>
                  Connectez-vous ou inscrivez-vous
                </Message.Header>
                pour accéder à {`/${location.search.split("=%2F").pop()}`}.
              </Message.Content>
            </Message>
          </Grid.Column>
        </Grid>
      )
    }
    return (
      <div>
        <br />
        <br />
        <br />
      </div>)
  }

  return (
    <div>
      <RedirectMessage />
      <Grid centered>
        <Route exact path={routes.SESSION} component={Home} />
        <Route path={routes.LOGIN} component={Login} />
        <Route path={routes.SIGNUP} component={Signup} />
        <Route path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
      </Grid>
      <Links />
    </div>
  )
}

Session.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Session
