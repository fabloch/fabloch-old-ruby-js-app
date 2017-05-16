import React from "react"
import { ConnectedRouter } from "react-router-redux"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"
import history from "../../state/history"

import { logout } from "../../state/ducks/session/actions"
import Loader from "./Loader"
import NavbarContainer from "./Navbar"
import NotificationList from "./Notifications/NotificationList"
import Routes from "./Routes"
import Footer from "./Footer"

const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Loader />
      <NavbarContainer />
      <Container>
        <NotificationList />
        <Routes />
      </Container>
      <Footer />
    </div>
  </ConnectedRouter>
)

export default connect(null, { logout })(App)
