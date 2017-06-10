import React from "react"
import { Icon } from "semantic-ui-react"

const toastrOptions = ({
  icon = "check mark",
  progressBar = true,
  timeOut = 5000,
}) => ({
  timeOut,
  progressBar,
  position: "top-center",
  transitionIn: "bounceInDown",
  transitionOut: "bounceOutUp",
  icon: (<Icon name={icon} size="big" />),
})

export default toastrOptions
