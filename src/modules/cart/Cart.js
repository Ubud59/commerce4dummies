import React, { Component } from 'react';

import {connect} from "react-redux";
import { updateCart } from "../../store/cart/actions";
import { getCartState } from "../../store/cart/selectors";

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';

import './Cart.css'

class Cart extends Component {
  render() {

    const imagePath = `https://www.decathlon.fr/media/${this.props.cart.cart.image_path}`;

    return (
      <div className="root">
        <Grid container className="cart-container">
          <Grid item >
            <Card className="cart">
              <CardMedia
                className="media"
                image={imagePath}
                />
              <CardContent>
                <Typography type="headline" component="h2">
                  {this.props.cart.cart.title}
                </Typography>
                <Typography component="p">
                  {this.props.cart.cart.description}
                </Typography>
                <Typography type="headline" component="h2">
                  {this.props.cart.cart.min_price} €
                </Typography>

              </CardContent>

            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const CartComponent = connect(getCartState, updateCart)(Cart)

export default CartComponent;
