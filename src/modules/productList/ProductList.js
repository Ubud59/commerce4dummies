import React,{Component} from 'react';
import {fetchProducts} from '../../utils/categories.services';

import { connect } from "react-redux";
import { updateCategories } from "../../store/categories/actions";
import { getCategoriesState } from "../../store/categories/selectors";

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class ProductList extends Component {
componentDidMount(){


  fetchProducts(this.props.match.params.id)
  .then(products => this.props.updateProducts(products))
  .catch(error => console.warn(error));
}
render(){
  return (
    <div>
      {this.props.categories.products.map((product, index) =>
        <Card key={index} onClick={() => this.props.history.push(`/product/${product.id}`)}>
          <CardContent>
            <Typography type="headline" component="h2">
              {product.title}
            </Typography>
          </CardContent>
        </Card>
      )
    }

    </div>
  )
}
}
const ProductListComponent = connect(getCategoriesState, updateCategories)(ProductList)
export default ProductListComponent;
