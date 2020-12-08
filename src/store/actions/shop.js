export const SET_ITEMS = 'SET_ITEMS';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const fetchItems = () => async dispatch => {
  try {
    const response = await fetch(`/products.json`);
    if (!response.ok) throw new Error('Something went wrong fetching items');
    const responseData = await response.json();
    dispatch({ type: SET_ITEMS, payload: responseData })
    console.log(responseData); //debug
  } catch (error) {
    console.log(error);  //debug
    throw error;
  }
}

export const addItemToCart = (productId) => async (dispatch, getState) => {
  const { cart } = getState().shop;
  if (!cart.includes(productId)) {
    dispatch({ type: ADD_ITEM_TO_CART, payload: productId })
  }
}
