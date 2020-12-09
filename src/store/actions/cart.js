export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_ALL_PRODUCTS_FROM_CART = 'REMOVE_ALL_PRODUCTS_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';


export const addProductToCart = product => (dispatch, getState) => {
  const { addedProducts } = getState().cart;
  if (addedProducts[product.productId]) {
    let updatedProduct = { ...product };
    updatedProduct.amount = addedProducts[product.productId].amount + 1;
    updatedProduct.totalPrice = +(updatedProduct.amount * addedProducts[product.productId].price).toFixed(2);
    addedProducts[product.productId] = updatedProduct;
  } else {
    let newProduct = { ...product }
    newProduct.amount = 1;
    newProduct.totalPrice = newProduct.price * 1;
    addedProducts[product.productId] = newProduct;
  }
  dispatch({ type: ADD_PRODUCT_TO_CART, payload: addedProducts })
}


export const removeProductFromCart = productId => (dispatch, getState) => {
  const { addedProducts } = getState().cart;
  if (addedProducts[productId]) {
    if (addedProducts[productId].amount > 1) {
      addedProducts[productId].amount--;
      addedProducts[productId].totalPrice = +(addedProducts[productId].amount * addedProducts[productId].price).toFixed(2);
    } else {
      delete addedProducts[productId];
    }
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: addedProducts })
  }
}

//remove all products with specific productId
export const removeAllProductsFromCart = productId => (dispatch, getState) => {
  const { addedProducts } = getState().cart;
  if (addedProducts[productId]) {
    delete addedProducts[productId]
    dispatch({ type: REMOVE_ALL_PRODUCTS_FROM_CART, payload: addedProducts })
  };
}

export const clearCart = () => dispatch => {
  dispatch({ type: CLEAR_CART })
}