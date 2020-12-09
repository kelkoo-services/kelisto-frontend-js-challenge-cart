import { ADD_PRODUCT_TO_CART } from '../actions/cart';

const initialState = {
  addedProducts: {}
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, addedProducts: action.payload }
    default:
      return state;
  }
}

export default cartReducer;