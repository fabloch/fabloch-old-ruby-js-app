import React from "react"
import { PropTypes } from "prop-types"
import { StripeProvider } from "react-stripe-elements"
import { Provider } from "react-redux"
// import App from "./layouts/App"
import App from "./layouts/App"

const Root = ({ store }) => (
  <StripeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </StripeProvider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
