const initialState= {
  categories: []
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {...state, categories: action.categories};
    default:
      return state;
  }
}
