import { createStore } from "redux";
import { combineReducers } from 'redux';
import productsReducer from './reducer/mod_1'
import cartReducer from './reducer/mod_2'

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);

console.log("initial state: ", store.getState());

export default store

