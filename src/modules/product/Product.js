import React, { Component } from 'react';
import fetchProduct from '../../utils/product.services.js';
import {connect} from "react-redux";
import { updateProduct } from "../../store/product/actions";
import { getProductState } from "../../store/product/selectors";

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';

import Rating from '../rating/Rating'


import './Product.css';

class Product extends Component {

  componentDidMount() {
    fetchProduct(this.props.match.params.id)
      .then(product => this.props.fetchProduct(product))
      .catch(error => console.warn(error));
  }

  render() {
    return (
      <div className="main">
        <Card className="card">
          <CardMedia
            className="media"
            image={this.props.product.product.image_path}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="title">
              {this.props.product.product.title}
            </Typography>
            <Typography type="caption">
              {this.props.product.product.description}
            </Typography>
          </CardContent>
          <CardActions className="card-actions">
            <Typography  type="title">
              {this.props.product.product.min_price} €
            </Typography>
            <Rating percent={this.props.product.product.rating_percent}></Rating>
            <Button fab size="medium" color="primary"
              onClick={ () => this.props.addProductToCart(this.props.product.product,1) }>
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const ProductComponent = connect(getProductState, updateProduct)(Product)

export default ProductComponent;
