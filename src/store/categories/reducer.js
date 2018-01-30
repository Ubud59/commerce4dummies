const initialState= {
  categories: [],
  products: [],
};


export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {...state, categories: action.categories};
    case "FETCH_PRODUCTS":
      return {...state, products: action.products};
    default:
      return state; 
  }
}
