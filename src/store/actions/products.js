export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => async dispatch => {
  try {
    const response = await fetch(`/data/products.json`);
    if (!response.ok) throw new Error('Something went wrong fetching products');
    const responseData = await response.json();
    dispatch({ type: SET_PRODUCTS, payload: responseData })
  } catch (error) {
    throw error;
  }
}