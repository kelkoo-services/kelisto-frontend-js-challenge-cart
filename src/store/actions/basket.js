export const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
export const REMOVE_PRODUCT_FROM_BASKET = 'ADD_PRODUCT_TO_BASKET';
export const REMOVE_ALL_PRODUCTS_FROM_BASKET = 'REMOVE_ALL_PRODUCTS_FROM_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';


export const addProductToBasket = product => (dispatch, getState) => {
  const { addedProducts } = getState().basket;
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
  dispatch({ type: ADD_PRODUCT_TO_BASKET, payload: addedProducts })
}

export const removeProductFromBasket = productId => (dispatch, getState) => {
  const { addedProducts } = getState().basket;
  if (addedProducts[productId]) {
    if (addedProducts[productId].amount > 1) {
      addedProducts[productId].amount--;
      addedProducts[productId].totalPrice = +(addedProducts[productId].amount * addedProducts[productId].price).toFixed(2);
    } else {
      delete addedProducts[productId];
    }
    dispatch({ type: REMOVE_PRODUCT_FROM_BASKET, payload: addedProducts })
  }
}

//remove all products with specific productId
export const removeAllProductsFromBasket = productId => (dispatch, getState) => {
  const { addedProducts } = getState().basket;
  if (addedProducts[productId]) {
    delete addedProducts[productId]
    dispatch({ type: REMOVE_ALL_PRODUCTS_FROM_BASKET, payload: addedProducts })
  };
}

export const clearBasket = () => dispatch => {
  dispatch({ type: CLEAR_BASKET })
}