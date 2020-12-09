import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BasketProduct from './BasketProduct';
import BasketHeader from './BasketHeader';
import BasketActionsRow from './BasketActionsRow';

const BasketContainer = () => {
  const addedProducts = useSelector(state => state.basket.addedProducts);
  const history = useHistory();

  const serveBasketProducts = (basketObj) => {
    let formattedProducts = [];
    for (const productId in basketObj) {
      formattedProducts.push(<li key={productId}><BasketProduct product={basketObj[productId]} /></li>);
    }
    return formattedProducts;
  }

  const serveBasketTotal = () => {
    let basketTotal = 0;
    for (const productId in addedProducts) {
      basketTotal += addedProducts[productId].totalPrice;
    }
    return <span className="ml-2">£{basketTotal.toFixed(2)}</span>
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
      <BasketActionsRow />
      <ul className="w-full bg-white shadow-md rounded-md">
        <li key={"basketHeader"}><BasketHeader /></li>
        {serveBasketProducts(addedProducts)}
      </ul>
      <div className="flex justify-end w-full bg-white mt-2 shadow-md rounded-md mb-10">
        <span className="text-lg font-bold py-2 px-8">Total: {serveBasketTotal()}</span>
      </div>
    </div>
  );
}

export default BasketContainer;