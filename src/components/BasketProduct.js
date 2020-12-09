import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToBasket, removeProductFromBasket, removeAllProductsFromBasket } from '../store/actions/basket';

const BasketProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex p-4 border-gray-200 border-t">

      <div className="h-14 w-14 mr-2">
        <img className="h-full w-auto" alt={product.title} src={product.image} />
      </div>

      <div className="flex-grow">
        <h2 className="font-bold">{product.title}</h2>
        <div className="flex items-center">
          <span className="sku">{product.sku}</span>
          <div>
            <span className="ml-2 action-text" onClick={() => dispatch(addProductToBasket(product))}>Add one</span>
            <span className="ml-2 action-text" onClick={() => dispatch(removeProductFromBasket(product.productId))}>Remove one</span>
            <span className="ml-2 action-text" onClick={() => dispatch(removeAllProductsFromBasket(product.productId))}>Remove all</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-2/5">
        <span className="flex flex-1 justify-center">{product.amount}</span>
        <span className="flex flex-1 justify-center">£{product.price}</span>
        <span className="flex flex-1 justify-center">£{product.totalPrice}</span>
      </div>
    </div>
  );
}

export default BasketProduct;