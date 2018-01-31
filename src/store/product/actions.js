export function updateProduct(dispatch) {
  return {
    fetchProduct: (product) => dispatch({type:"FETCH_PRODUCT", product: product}),
    addProductToCart: (product, qty) => dispatch({type:"ADD_TO_CART", product:product, qty:qty})
  }
}
