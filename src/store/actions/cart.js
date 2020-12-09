export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addProductToCart = (product) => async (dispatch, getState) => {
  const { addedProducts } = getState().cart;
  if (addedProducts[product.productId]) {
    let updatedProduct = { ...product };
    updatedProduct.amount = addedProducts[product.productId].amount + 1;
    updatedProduct.totalPrice = updatedProduct.amount * addedProducts[product.productId].price;
    addedProducts[product.productId] = updatedProduct;
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: addedProducts })
  } else {
    let newProduct = { ...product }
    newProduct.amount = 1;
    newProduct.totalPrice = newProduct.price * 1;
    addedProducts[product.productId] = newProduct;
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: addedProducts })
  }
}