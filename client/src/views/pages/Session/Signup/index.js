import React from "react"
import PropTypes from "prop-types"

import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"

import SignupForm from "./SignupForm"

const Signup = ({ location }) => {
  const search = location.search
  return (
    <Grid.Column width={5} textAlign="center">
      <h1>Inscription</h1>
      <SignupForm />
      <div>
        <p>
          Vous avez déjà un compte ?
          { " " }
          <Link
            to={{
              pathname: "/session/login",
              search,
            }}
          >
            Rendez-vous sur la page de connexion
          </Link>
        </p>
      </div>
    </Grid.Column>
  )
}

Signup.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Signup
