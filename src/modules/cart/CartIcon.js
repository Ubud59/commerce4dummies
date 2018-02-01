import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCartState } from "../../store/cart/selectors";

import { Link } from 'react-router-dom';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';

import './CartIcon.css';


class CartIcon extends Component {

  render() {
    const qty=this.props.cart.cart
      ? (this.props.cart.cart.reduce(
          ((acc,item)=> {
            acc+=item.qty;
            return acc;
          }),0))
      : (0);

    return (
      <div>
        <IconButton aria-label="Cart Icon">
          <Link to="/cart">
            <Badge className="cart-badge" badgeContent={qty} >
              <Icon className="cart-icon" >shopping_cart</Icon>
            </Badge>
          </Link>
        </IconButton>
      </div>
    );
  }
}

const CartIconComponent = connect(getCartState)(CartIcon)

export default CartIconComponent;
