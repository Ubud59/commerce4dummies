const initialState= {
  categories: [],
  products: [],
  categoryId:""
};


export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {...state, categories: action.categories};

    case "FETCH_PRODUCTS":
      return {...state, products: action.products};

    case "SELECT_CATEGORY":
      return {...state, categoryId: action.categoryId, products: action.products};

    default:
      return state;
  }
}
