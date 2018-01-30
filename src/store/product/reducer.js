const initialState= {
  product : {
    id: "",
    decathlon_id: null,
    title: "",
    description: "",
    brand_id: "",
    min_price: null,
    max_price: null,
    crossed_price: 0,
    percent_reduction: 0,
    image_path: "",
    rating: null
  }
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {...state, product: action.product};
    default:
      return state;
  }
}
