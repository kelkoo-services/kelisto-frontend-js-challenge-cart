import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  REMOVE_ALL_PRODUCTS_FROM_BASKET,
  CLEAR_BASKET
} from '../actions/basket';

const initialState = {
  addedProducts: {}
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
    case REMOVE_PRODUCT_FROM_BASKET:
    case REMOVE_ALL_PRODUCTS_FROM_BASKET:
    case CLEAR_BASKET:
      return { ...state, addedProducts: { ...action.payload } };
    default:
      return state;
  }
}

export default basketReducer;