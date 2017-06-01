import React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"
import * as routes from "../../../layouts/Routes"

import LoginForm from "./LoginForm"

const Login = ({ location }) => {
  const search = location.search
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
              pathname: routes.SIGN_UP,
              search,
            }}
          >
            Rendez-vous sur la page d&apos;inscription
          </Link>
        </p>
      </div>
    </Grid.Column>
  )
}

Login.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Login
