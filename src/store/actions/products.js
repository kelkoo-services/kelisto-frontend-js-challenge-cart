export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => async dispatch => {
  try {
    const response = await fetch(`/products.json`);
    if (!response.ok) throw new Error('Something went wrong fetching products');
    const responseData = await response.json();
    dispatch({ type: SET_PRODUCTS, payload: responseData })
    console.log(responseData); //debug
  } catch (error) {
    console.log(error);  //debug
    throw error;
  }
}