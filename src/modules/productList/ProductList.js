import React,{Component} from 'react';
import {fetchProducts} from '../../utils/categories.services';

import { connect } from "react-redux";
import {Link} from 'react-router-dom';

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


render(){

  console.log("this.props in ProductList comp", this.props);

  return (
    <div className="root-product-list">
      {this.props.categories.products.map((product, index) =>
        <Card key={index} className="card-product-list" >

          <Link to={`/product/${product.id}`}>
            <CardMedia
              className="media-product-list"
              image={`${product.image_path}`}
              />
          </Link>

          <CardContent className="card-content">
            <Typography type="body2">
              {product.title}
            </Typography>
          </CardContent>

          <div className="button-container">
            <div >
              <Typography type="body2">
                {product.min_price} €
              </Typography>
            </div>
            <div item >
              <CardActions>
                <Button fab size="medium" color="primary"
                  onClick={ () => this.props.addProductToCart(product,1) }>
                  <AddShoppingCartIcon />
                </Button>
              </CardActions>
            </div>
          </div>
        </Card>
      )};
  </div>
  )}
}

const ProductListComponent = connect(getCategoriesState, updateCategories)(ProductList)
export default ProductListComponent;
