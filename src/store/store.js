import { createStore, combineReducers } from 'redux';
import categoriesReducer from "./categories/reducer"

const rootReducer = combineReducers({
  categories: categoriesReducer
})

let store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()))

export default store;
