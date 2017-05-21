import React from "react"
import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"

import LoginForm from "./LoginForm"

const LoginPage = (props) => {
  const search = props.location.search
  return (
    <Grid.Column width={5} textAlign="center">
      <h1>Connexion</h1>
      <LoginForm />
      <div>
        <p>
          Pas encore inscrit.e ?
          { " " }
          <Link
            to={{
              pathname: "/session/signup",
              search,
            }}
          >
            Rendez-vous sur la page d'inscription
          </Link>
        </p>
      </div>
    </Grid.Column>
  )
}

export default LoginPage
