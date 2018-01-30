export function updateProduct(dispatch) {
  return {
    fetchProduct: (product) => dispatch({type:"FETCH_PRODUCT", product: product}),
    // handleCategorySelect: (id) =>
  }
}
