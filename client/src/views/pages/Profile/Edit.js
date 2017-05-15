import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
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
      { !profile.data  && intro }
      <Grid.Column mobile={14} tablet={10} computer={6}>
        <Form />
      </Grid.Column>
    </Grid>
  )
}

// Edit.propTypes = {
//   username: PropTypes.string.isRequired,
//   firstname: PropTypes.string,
//   lastname: PropTypes.string,
//   description: PropTypes.string,
//   birthday: PropTypes.string,
// }
//
// Edit.defaultProps = {
//   firstname: "",
//   lastname: "",
//   description: "",
//   birthday: "",
// }

const mapStateToProps = state => ({
  profile: state.profile.toJS(),
})

export default connect(mapStateToProps, null)(Edit)
