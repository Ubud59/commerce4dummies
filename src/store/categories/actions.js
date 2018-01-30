export function updateCategories(dispatch) {
  return {
    fetchCategories: (categories) => dispatch({type:"FETCH_CATEGORIES", categories: categories}),
    // handleCategorySelect: (id) => 
  }
}
