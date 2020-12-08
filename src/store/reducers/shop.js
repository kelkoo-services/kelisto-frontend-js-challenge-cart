import { SET_ITEMS, ADD_ITEM_TO_CART } from '../actions/shop';

const initialState = {
  items: [],
  cart: []
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case ADD_ITEM_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    default:
      return state;
  }
}

export default shopReducer;