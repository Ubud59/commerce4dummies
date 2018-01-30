import React, { Component } from 'react';
import fetchProduct from '../../utils/product.services.js';

class Product extends Component {

  componentDidMount() {
    fetchProduct("2290a129-c530-43e5-8cec-984e4111aa7b")
      .then( product => console.log(product) )
      .catch(error => console.warn(error));
;
  }

  render() {
    return (
      <div>
        Categories
      </div>
    );
  }
}

export default Product;
