import React from 'react';

import { connect } from "react-redux";
import { updateCart } from "../../store/cart/actions";
import { getCartState } from "../../store/cart/selectors";


function Checkout(props) {
  return (
    <div>CHECKOUT</div>
  );
}


const CheckoutComponent = connect(getCartState, updateCart)(Checkout)
export default CheckoutComponent
