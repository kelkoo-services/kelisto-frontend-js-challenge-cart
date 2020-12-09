import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartProduct from './CartProduct';
import CartHeader from './CartHeader';
import CartActionsRow from './CartActionsRow';

const CartContainer = () => {
  const addedProducts = useSelector(state => state.cart.addedProducts);
  const history = useHistory();

  const serveCartProducts = (cartObj) => {
    let formattedProducts = [];
    for (const productId in cartObj) {
      formattedProducts.push(<li key={productId}><CartProduct product={cartObj[productId]} /></li>);
    }
    return formattedProducts;
  }

  const serveCartTotal = () => {
    let cartTotal = 0;
    for (const productId in addedProducts) {
      cartTotal += addedProducts[productId].totalPrice;
    }
    return <span className="ml-2">£{cartTotal.toFixed(2)}</span>
  }

  if (Object.keys(addedProducts).length < 1) {
    return (
      <p className="my-8 mt-24">
        Your car is empty. Please
        <span className="cursor-pointer text-blue-500" onClick={() => history.goBack()}> go back </span>
        and try adding some products.
      </p>
    );
  };

  return (
    <div className="flex flex-col flex-grow items-center w-full px-20 max-w-screen-xl mt-24">
      <CartActionsRow />
      <ul className="w-full bg-white shadow-md rounded-md">
        <li key={"cartHeader"}><CartHeader /></li>
        {serveCartProducts(addedProducts)}
      </ul>
      <div className="flex justify-end w-full bg-white mt-2 shadow-md rounded-md mb-10">
        <span className="text-lg font-bold py-2 px-8">Total: {serveCartTotal()}</span>
      </div>
    </div>
  );
}

export default CartContainer;