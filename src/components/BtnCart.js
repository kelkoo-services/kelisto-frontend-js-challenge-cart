import React from 'react';
import { useSelector } from 'react-redux';

const BtnCart = () => {
  const cart = useSelector(state => state.shop.cart);

  return (
    <div className="bg-blue-300 py-2 px-4 cursor-pointer">
      Cart ({cart.length})
    </div>
  );
}

export default BtnCart;