import React from "react"
import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"

import SignupForm from "./SignupForm"

const SignupPage = (props) => {
  const search = props.location.search
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

export default SignupPage
