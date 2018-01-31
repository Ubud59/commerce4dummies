import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCartState } from "../../store/cart/selectors";

import { Link } from 'react-router-dom';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';


class CartIcon extends Component {

  render() {
    const qty=this.props.cart.cart.reduce(
      ((acc,item)=> acc+=item.qty),
      0);

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
