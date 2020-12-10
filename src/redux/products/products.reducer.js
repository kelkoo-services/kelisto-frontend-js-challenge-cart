import PRODUCTS_DATA from '../../data/products.json'

const INITIAL_STATE = {
  products: PRODUCTS_DATA
}

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
