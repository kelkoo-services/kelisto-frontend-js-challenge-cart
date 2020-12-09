import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART,
  CLEAR_CART
} from '../actions/cart';

const initialState = {
  addedProducts: {}
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
    case REMOVE_PRODUCT_FROM_CART:
    case REMOVE_ALL_PRODUCTS_FROM_CART:
    case CLEAR_CART:
      return { ...state, addedProducts: { ...action.payload } }
    default:
      return state;
  }
}

export default cartReducer;