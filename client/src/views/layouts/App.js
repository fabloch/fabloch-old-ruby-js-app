import React from "react"
import { ConnectedRouter } from "react-router-redux"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"
import history from "../../state/history"
import Sticky from "react-stickynode"

import { logout } from "../../state/ducks/session/actions"
import Loader from "./Loader"
import Splash from "./Splash"
import NavbarContainer from "./Navbar"
import NotificationList from "./Notifications/NotificationList"
import Routes from "./Routes"
import Footer from "./Footer"

const App = () => (
  <ConnectedRouter history={history}>
    <div style={{ height: "100%" }}>
      <Loader />
      <Route exact path="/" component={Splash} />
      <Sticky enabled={true} top={0} innerZ={3}>
        <NavbarContainer />
      </Sticky>
      <Container style={{ minHeight: "100%", marginTop: "50px" }}>
        <NotificationList />
        <Routes />
      </Container>
      <Footer />
    </div>
  </ConnectedRouter>
)

export default connect(null, { logout })(App)
