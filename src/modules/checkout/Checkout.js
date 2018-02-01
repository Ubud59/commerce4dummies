import React, {Component} from 'react';

import { connect } from "react-redux";
import { updateCart } from "../../store/cart/actions";
import { getCartState } from "../../store/cart/selectors";
import StripeCheckout from 'react-stripe-checkout';
import TextField from 'material-ui/TextField';
import Modal from 'material-ui/Modal'
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

import './Checkout.css'

class Checkout extends Component {

  render() {
    return (
      <div className="main-checkout">
          <TextField
            id="name"
            label="Name"
            value={this.props.cart.checkoutForm.name}
            onChange={this.props.handleNameChange}
            margin="normal"
            className="textField"
          />
          <TextField
            id="address"
            label="Address"
            multiline
            value={this.props.cart.checkoutForm.address}
            onChange={this.props.handleAddressChange}
            margin="normal"
            className="textField"
          />
          <TextField
            id="phone"
            label="Phone"
            value={this.props.cart.checkoutForm.phone}
            onChange={this.props.handlePhoneChange}
            margin="normal"
            className="textField"
          />
        <StripeCheckout
          token={this.onToken}
          amount={this.getAmount()}
          currency="EUR"
          email={this.props.cart.checkoutForm.email}
          stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
        />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.cart.payment.loaderOpen}
          className="modal"
        >
        <div className="paper">
          <CircularProgress size={50} />
          <Typography>Payment processing</Typography>
        </div>
      </Modal>
      </div>
    );
  }

  onToken = (token) => {
    const body = {
      authorize: token,
      products: this.props.cart
    }

    this.props.toggleDialogProcessing()

    fetch('/finalize', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === "succeeded") {
        this.props.resetCart();
        this.props.history.push(`/payment/success`);
      } else {
        this.props.history.push(`/payment/error`)
      }
    })
    .catch(e => this.props.history.push(`/payment/error`));
  }

  getAmount = () => {
    return this.props.cart.cart.reduce(
        ((acc,item)=> {
          acc+=(item.min_price * item.qty);
          return acc;
        }),0) * 100
  }


}

const CheckoutComponent = connect(getCartState, updateCart)(Checkout)
export default CheckoutComponent
