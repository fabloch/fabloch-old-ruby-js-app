import React from "react"

import RouterButton from "../../../components/RouterButton"

const Actions = () =>
  <RouterButton
    floated="right"
    to={{ pathname: "/profile/edit" }}
    content="Edit"
    icon="write"
    labelPosition="left"
  />

export default Actions
