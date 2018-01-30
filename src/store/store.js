import { createStore, combineReducers } from 'redux';
import categoriesReducer from "./categories/reducer";
import productReducer from "./product/reducer";
import userReducer from "./users/reducer"

const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  product: productReducer
})

let store = createStore(rootReducer);

store.subscribe(() => console.log("fuck:",store.getState()))

export default store;
