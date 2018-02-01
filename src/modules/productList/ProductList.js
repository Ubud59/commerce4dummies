import React,{Component} from 'react';
import {fetchProducts} from '../../utils/categories.services';

import { connect } from "react-redux";
import { updateCategories } from "../../store/categories/actions";
import { getCategoriesState } from "../../store/categories/selectors";
import { getProductState } from "../../store/product/selectors";

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import "./ProductList.css"

class ProductList extends Component {

componentDidMount(){
  fetchProducts(this.props.match.params.id)
  .then(products => this.props.updateProducts(products))
  .catch(error => console.warn(error));
}

render(){
  return (
    <div className="root-product-list">
      {this.props.categories.products.map((product, index) =>
        <Card key={index} className="card" onClick={() => this.props.history.push(`/product/${product.id}`)}>


                  <CardMedia
                  className="media"
                  image={`https://www.decathlon.fr/media/${product.image_path}`}
                  />


                <CardContent className="card-content">
                  <Typography type="headline" component="h2">
                    {product.title}
                  </Typography>
                  <Typography component="p">
                    {product.description}
                  </Typography>
                  <Typography type="headline" component="h2">
                    {product.min_price} €
                  </Typography>
                  </CardContent>

                <Grid container className="button-container">
                  <Grid item >
                    <CardActions>
                      <Button fab size="medium" color="primary"
                        onClick={ () => this.props.addProductToCart(product,1) }>
                        <AddShoppingCartIcon />
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
        </Card>
      )};
  </div>
  )}
}

const ProductListComponent = connect(getCategoriesState, updateCategories)(ProductList)
export default ProductListComponent;
