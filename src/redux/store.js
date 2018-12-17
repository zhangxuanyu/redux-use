import { createStore } from "redux";
import { combineReducers } from 'redux';
import productsReducer from './reducer/product'
import cartReducer from './reducer/car'

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
  }
  
const rootReducer = combineReducers(allReducers);

const store = createStore(rootReducer);

export default store