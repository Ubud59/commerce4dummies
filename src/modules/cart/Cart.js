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

    const total=this.props.cart.cart
      ? (this.props.cart.cart.reduce(
          ((acc,item)=> {
            acc+=(item.min_price * item.qty);
            return acc;
          }),0))
      : (0);


    return (

      <div className="root">
        <Grid container className="cart-container">


          <Grid item className="grid-item">
            <Card className="productincart">
              <div className="card-cart-container">
              <CardMedia
                className="media-cart"
                image={``}
                />
              <CardContent className="card-content-container">
                <div className="title font">
                  Product
                </div>
                <div className="qty font">
                  Quantity
                </div>
                <div className="qty font">
                  Remove
                </div>
                <div className="price font">
                Unit Price
                </div>
                <div className="price font">
                  Total Price
                </div>
              </CardContent>
            </div>
            </Card>
          </Grid>





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
                  <IconButton aria-label="Cart Icon" onClick={ () => {this.props.updateQty(index, productincart.qty >=1 ? productincart.qty-1 : productincart.qty)}}>
                        <Icon>remove_circle</Icon>
                  </IconButton>
                  {productincart.qty}
                  <IconButton aria-label="Cart Icon" onClick={ () => this.props.updateQty(index, productincart.qty+1)}>
                        <Icon>add_circle</Icon>
                  </IconButton>
                </div>
                <div className="qty">
                  <IconButton aria-label="Cart Icon" onClick={ () => this.props.deleteProduct(index)}>
                    <Icon>delete</Icon>
                  </IconButton>
                </div>
                <div className="price">
                  {productincart.min_price.toFixed(2)} €
                </div>
                <div className="price">
                  {(productincart.min_price * productincart.qty).toFixed(2)} €
                </div>
              </CardContent>
            </div>
            </Card>
          </Grid>
        )
        }

        <Grid item className="grid-item">
          <Card className="productincart">
            <div className="card-cart-container">
            <CardMedia
              className="media-cart"
              image={``}
              />
            <CardContent className="card-content-container">
              <div className="title">
              </div>
              <div className="qty">
              </div>
              <div className="price font">
                Total Price
              </div>
              <div className="price font">
                {total.toFixed(2)} €
              </div>
            </CardContent>
          </div>
          </Card>
        </Grid>


        </Grid>
      </div>
    );
  }
}

const CartComponent = connect(getCartState, updateCart)(Cart)

export default CartComponent;
