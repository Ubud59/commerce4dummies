export function updateCategories(dispatch) {
  return {
    fetchCategories: (categories) => dispatch({type:"FETCH_CATEGORIES", categories: categories}),
    updateProducts: (products) => dispatch({type:"FETCH_PRODUCTS", products: products})
  }
}
