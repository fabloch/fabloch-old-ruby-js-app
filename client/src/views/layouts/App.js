import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"

import { logout } from "../../state/ducks/session/actions"
import Loader from "./Loader"
import NavbarContainer from "./Navbar"
import NotificationList from "./Notifications/NotificationList"
import Routes from "./Routes"
import Footer from "./Footer"

const App = ({ loading }) => {
  return (
    <Router>
      <div>
        <Loader />
        <NavbarContainer />
        <Container>
            <NotificationList />
            <Routes />
          }
        </Container>
        <Footer />
      </div>
    </Router>
)}

export default connect(null, { logout })(App)
