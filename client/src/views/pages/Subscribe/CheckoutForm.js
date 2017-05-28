import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements"

import { Form, Grid, Segment, Header, List, Button } from "semantic-ui-react"

// import "./CheckoutForm.css"

const style = {
  base: {
    color: "#303238",
    fontSize: "18px",
    lineHeight: "48px",
    fontSmoothing: "antialiased",
    "::placeholder": {
      color: "#ccc",
    },
    ":focus:": {
      color: "#2185D0",
    },
  },
  empty: {
    color: "#FBBD08",
  },
  invalid: {
    color: "#DB2828",
  },
  complete: {
    color: "#21BA45",
  },
}

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault()

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({ name: "Jenny Rosen" }).then(({ token }) => {
      console.log("Received Stripe token:", token)
    })

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: "card", name: 'Jenny Rosen'});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Numéro de carte</label>
          <CardNumberElement style={style} />
        </Form.Field>

        <Form.Field>
          <label>Date d'expiration</label>
          <CardExpiryElement style={style} />
        </Form.Field>

        <Form.Field>
          <label>CVC</label>
          <CardCVCElement style={style} />
        </Form.Field>

        <Button
          onClick={() => {}}
          color="green"
          content="Payer et confimer"
          icon="chevron right"
          labelPosition="right"
          size="large"
          fluid
        />
      </Form>
    )
  }
}

CheckoutForm.propTypes = {
  stripe: PropTypes.object.isRequired,
}

export default injectStripe(CheckoutForm)
