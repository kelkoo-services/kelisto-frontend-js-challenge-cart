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
      <p>
        Your car is empty. Please
        <span className="cursor-pointer text-blue-500" onClick={() => history.goBack()}> go back </span>
        and try adding some products.
      </p>
    );
  };

  return (
    <>
      <CartActionsRow />
      <ul className="bg-blue-200 flex flex-col w-full px-10 justify-center">
        <li key={"cartHeader"}><CartHeader /></li>
        {serveCartProducts(addedProducts)}
      </ul>
      <div className="flex justify-end w-full">
        Total: {serveCartTotal()}
      </div>
    </>
  );
}

export default CartContainer;