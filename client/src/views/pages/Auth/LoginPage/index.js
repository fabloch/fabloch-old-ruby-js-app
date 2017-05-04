import React from "react"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
// import { toJS } from "../hoc/toJS"
import { Grid } from "semantic-ui-react"

import LoginForm from "./LoginForm"
import { login } from "../../../../state/ducks/auth/actions"
import { addNotification } from "../../../../state/ducks/notification/actions"

const LoginPage = ({ login, addNotification }) => {
  return (
    <Grid.Column width={5} textAlign="center">
      <h1> Login</h1>
      <LoginForm
        login={login}
        addNotification={addNotification}
      />
    </Grid.Column>
  )
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  addNotification: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  login,
  addNotification,
}

export default connect(null, mapDispatchToProps)(LoginPage)
