import React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"

import Form from "./Form"

const Edit = ({ profile }) => {
  const intro = (
    <div>
      <h1>Vous n'avez pas de encore profil</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </div>
  )

  return (
    <Grid centered>
      { !profile.data && intro }
      <Grid.Column mobile={14} tablet={10} computer={6}>
        <Form />
        Here should be the form
      </Grid.Column>
    </Grid>
  )
}

Edit.propTypes = {
  profile: PropTypes.object.isRequired,
}

//
// Edit.defaultProps = {
//   firstname: "",
//   lastname: "",
//   description: "",
//   birthday: "",
// }

export default Edit
