import { combineReducers } from 'redux'

import { bagReducer } from './bag/bag.reducer'
import { productsReducer } from './products/products.reducer'

export default combineReducers({
  bag: bagReducer,
  products: productsReducer
})
