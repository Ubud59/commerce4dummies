import React, { Component } from 'react';

import {connect} from "react-redux";
import { updateCart } from "../../store/cart/actions";
import { getCartState } from "../../store/cart/selectors";

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import './Cart.css'


class Cart extends Component {
  render() {


    return (

      <div className="root">
        <Grid container className="cart-container">

          {this.props.cart.cart.map((productincart, index) =>
          <Grid item key={index} className="grid-item">
            <Card className="productincart">
              <div className="card-cart-container">
              <CardMedia
                className="media-cart"
                image={`https://www.decathlon.fr/media/${productincart.image_path}`}
                />
              <CardContent className="card-content-container">
                <div className="title">
                  {productincart.title}
                </div>
                <div className="qty">
                  <IconButton aria-label="Cart Icon" onClick={ () => this.props.updateQty(index, productincart.qty-1)}>
                        <Icon>remove_circle</Icon>
                  </IconButton>
                  {productincart.qty}
                  <IconButton aria-label="Cart Icon" onClick={ () => this.props.updateQty(index, productincart.qty+1)}>
                        <Icon>add_circle</Icon>
                  </IconButton>
                </div>
                <div className="price">
                  {productincart.min_price} €
                </div>
                <div className="price">
                  {productincart.min_price * productincart.qty} €
                </div>
              </CardContent>
            </div>
            </Card>
          </Grid>
        )
        }
        </Grid>
      </div>
    );
  }
}

const CartComponent = connect(getCartState, updateCart)(Cart)

export default CartComponent;
