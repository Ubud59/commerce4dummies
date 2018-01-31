import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCartState } from "../../store/cart/selectors";

import { Link } from 'react-router-dom';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';


class CartIcon extends Component {

  render() {

    console.log("props in cartIcon component",this.props.cart.cart);

    const qty=this.props.cart.cart
      ? (this.props.cart.cart.reduce(
          ((acc,item)=> {
            acc+=item.qty;
            console.log("acc",acc);
            return acc;
          }),0))
      : (0);

    console.log("qty in cart",qty);

    return (
      <div>
        <IconButton aria-label="Cart Icon">
          <Link to="/cart">
            <Badge badgeContent={qty} >
              <Icon>shopping_cart</Icon>
            </Badge>
          </Link>
        </IconButton>
      </div>
    );
  }
}

const CartIconComponent = connect(getCartState)(CartIcon)

export default CartIconComponent;
