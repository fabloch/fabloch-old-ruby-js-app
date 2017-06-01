import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"
import { Grid, Message, Icon } from "semantic-ui-react"

import Signup from "./Signup"
import Login from "./Login"

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
        <Route path="/session/login" component={Login} />
        <Route path="/session/signup" component={Signup} />
      </Grid>
    </div>
  )
}

Session.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Session
