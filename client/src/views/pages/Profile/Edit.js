import React from "react"
import PropTypes from "prop-types"
import { Grid, Card, Image, Icon } from "semantic-ui-react"
import Form from "./Form"

const ProfileEdit = () => (
  <div>
    <h1>Vous n'avez pas de encore profil</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
    <Form />
  </div>
)

ProfileEdit.propTypes = {
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  description: PropTypes.string,
  birthday: PropTypes.string,
}

ProfileEdit.defaultProps = {
  firstname: "",
  lastname: "",
  description: "",
  birthday: "",
}

export default ProfileEdit
