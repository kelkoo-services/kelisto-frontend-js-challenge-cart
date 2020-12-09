import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart, removeAllProductsFromCart } from '../store/actions/cart';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex mb-8 ">

      <div className="h-14 w-14 mr-2">
        <img className="h-full w-auto" alt={product.title} src={product.image} />
      </div>

      <div className="flex-grow">
        <h2 className="font-bold">{product.title}</h2>
        <div className="flex">
          <span>{product.sku}</span>
          <div>
            <span className="ml-2 cursor-pointer" onClick={() => dispatch(addProductToCart(product))}>[ Add one ]</span>
            <span className="ml-2 cursor-pointer" onClick={() => dispatch(removeProductFromCart(product.productId))}>[ Remove one ]</span>
            <span className="ml-2 cursor-pointer" onClick={() => dispatch(removeAllProductsFromCart(product.productId))}>[ Remove all ]</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-2/5">
        <span className="bg-red-200 flex flex-1 justify-center">{product.amount}</span>
        <span className="bg-pink-200 flex flex-1 justify-center">£{product.price}</span>
        <span className="bg-green-200 flex flex-1 justify-center">£{product.totalPrice}</span>
      </div>
    </div>
  );
}

export default CartProduct;