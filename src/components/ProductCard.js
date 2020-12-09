import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../store/actions/cart';

const ProductCard = ({ product }) => {
  const { productId, image, title, sku, price } = product;
  const dispatch = useDispatch();
  const { addedProducts } = useSelector(state => state.cart);

  return (
    <div className="bg-green-200 flex flex-col items-center w-80 p-6 m-4">
      <div className="bg-yellow-200 w-full h-36 flex justify-center mb-4">
        <img src={image} alt={title} className="h-full w-auto" />
      </div>
      <div className="h-36">
        <div className="mb-4">
          <h1 className="inline">{title}</h1>
          <span>, {sku}</span>
        </div>
        <div className="mb-4">
          <h2>£{price}</h2>
        </div>
      </div>
      <div className="bg-red-300 w-full flex justify-center py-4 cursor-pointer" onClick={() => dispatch(addProductToCart(product))}>
        Add to Basket {addedProducts[productId] ? `(${addedProducts[productId].amount})` : null}
      </div>
    </div>
  );
}

export default ProductCard;