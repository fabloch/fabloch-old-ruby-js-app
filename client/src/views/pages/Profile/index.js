import React from "react"
import { Route } from "react-router-dom"
import { Grid } from "semantic-ui-react"

import Show from "./Show"
import Edit from "./Edit"

export const ProfilePage = () =>
  <div>
    <Route exact path="/profile" component={Show} />
    <Route path="/profile/edit" component={Edit} />
  </div>

export default ProfilePage
