export function updateCategories(dispatch) {
  return {
    fetchCategories: (categories) => dispatch({type:"FETCH_CATEGORIES", categories: categories}),
    updateProducts: (products) => dispatch({type:"FETCH_PRODUCTS", products: products}),
    addProductToCart: (product, qty) => dispatch({type:"ADD_TO_CART", product:product, qty:qty})
  }
}
