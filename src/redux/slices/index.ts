import { combineReducers } from '@reduxjs/toolkit';
import categoriesSlice from './categories/slice';
import productsSlice from './products/slice';

const reducers = combineReducers({
  categories: categoriesSlice,
  products: productsSlice
})

export default reducers