import { createStore, combineReducers } from 'redux';
import categoriesReducer from "./categories/reducer";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";
import userReducer from "./users/reducer"

const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  product: productReducer,
  cart: cartReducer

})

let store = createStore(rootReducer);

store.subscribe(() => console.log("State:",store.getState()))

export default store;
