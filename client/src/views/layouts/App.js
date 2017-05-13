import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"

import { logout } from "../../state/ducks/session/actions"
import NavbarContainer from "./Navbar"
// import NotificationList from "./Notifications/NotificationList"
import Routes from "./Routes"
import Footer from "./Footer"

const App = () => (
  <Router>
    <div>
      <NavbarContainer />
      <Container>
        {/* <NotificationList /> */}
        <Routes />
      </Container>
      <Footer />
    </div>
  </Router>
)

export default connect(false, { logout })(App)
