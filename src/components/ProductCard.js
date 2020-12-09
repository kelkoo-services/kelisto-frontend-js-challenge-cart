import React from 'react';
import Btn from './Btn';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToBasket } from '../store/actions/basket';
import ReactTooltip from 'react-tooltip';
import IconBasket from './icons/IconBasket';

const ProductCard = ({ product }) => {
  const { productId, image, title, sku, price, description } = product;
  const dispatch = useDispatch();
  const { addedProducts } = useSelector(state => state.basket);

  return (
    <div className="bg-white shadow-md rounded-md flex flex-col items-center w-80 p-6 m-4">
      <ReactTooltip className="tooltip" />
      <div className="w-full h-36 flex justify-center mb-4">
        <img src={image} alt={title} className="h-full w-auto" />
      </div>
      <div className="h-40">
        <div className="mb-1">
          <h1 className="inline font-bold">{title}</h1>
          <span className="sku"> {sku}</span>
        </div>
        <div className="mb-4">
          <span data-tip={description} className="font-semibold text-custom-blue cursor-pointer">+ Info</span>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-lg">£{price}</h2>
        </div>
      </div>

      <Btn action={() => dispatch(addProductToBasket(product))}>
        <div className="mr-2"><IconBasket /></div>
        <div>
          Add to Basket {addedProducts[productId] ? <span className="text-sm ml-2">({addedProducts[productId].amount})</span> : null}
        </div>

      </Btn>
    </div>
  );
}

export default ProductCard;