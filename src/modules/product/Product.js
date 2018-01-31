import React, { Component } from 'react';
import fetchProduct from '../../utils/product.services.js';
import {connect} from "react-redux";
import { updateProduct } from "../../store/product/actions";
import { getProductState } from "../../store/product/selectors";

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';


const styles = {
  root : {
    flexGrow: 1,
    marginTop: 100,
  },
  card: {
    maxWidth: 350,
  },
  media: {
    height: 200,
  },
};

class Product extends Component {

  componentDidMount() {
    fetchProduct(this.props.match.params.id)
      .then(product => this.props.fetchProduct(product))
      .catch(error => console.warn(error));
  }

  render() {


    const imagePath = `https://www.decathlon.fr/media/${this.props.product.product.image_path}`;

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container alignItems="center" justify="center" direction="row">
          <Grid item >
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
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
              <Grid container alignItems="center" justify="flex-end" direction="row">
                <Grid item >
                  <CardActions>
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

export default withStyles(styles)(ProductComponent);
