import React from "react"
import { Route } from "react-router-dom"
import { Grid, Message, Icon } from "semantic-ui-react"

import SignupPage from "./SignupPage"
import LoginPage from "./LoginPage"

const Session = ({location}) => {
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
    return <div></div>
  }

  return (
    <div>
      <RedirectMessage />
      <Grid centered>
        <Route path="/session/login" component={LoginPage} />
        <Route path="/session/signup" component={SignupPage} />
      </Grid>
    </div>
  )
}

export default Session
