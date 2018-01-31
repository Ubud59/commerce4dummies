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



import './Product.css';

class Product extends Component {

  componentDidMount() {
    fetchProduct(this.props.match.params.id)
      .then(product => this.props.fetchProduct(product))
      .catch(error => console.warn(error));
  }

  render() {


    const imagePath = `https://www.decathlon.fr/media/${this.props.product.product.image_path}`;

    return (
      <div className="root">
        <Grid container className="card-container">
          <Grid item >
            <Card className="card">
              <CardMedia
                className="media"
                image={imagePath}
                />
              <CardContent>
                <Typography type="headline" component="h2">
                  {this.props.product.product.title}
                </Typography>
                <Typography component="p">
                  {this.props.product.product.description}
                </Typography>
                <Typography type="headline" component="h2">
                  {this.props.product.product.min_price} €
                </Typography>

              </CardContent>
              <Grid container className="button-container">
                <Grid item >
                  <CardActions>
                    <div>REVIEW
                    </div>
                    <Button fab size="medium" color="primary"
                      onClick={ () => this.props.addProductToCart(this.props.product.product,1) }>
                      <AddShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const ProductComponent = connect(getProductState, updateProduct)(Product)

export default ProductComponent;
