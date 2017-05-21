import React from "react"

import Button from "../../components/Button"

const Actions = () =>
  <Button
    floated="right"
    to={{ pathname: "/profile/edit" }}
    content="Edit"
    icon="write"
    labelPosition="left"
  />

export default Actions
