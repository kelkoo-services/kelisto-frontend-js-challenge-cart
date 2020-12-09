import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BtnCart = () => {
  const addedProducts = useSelector(state => state.cart.addedProducts);

  return (
    <div className="bg-blue-300 py-2 px-4 cursor-pointer">
      <Link to='/cart'>Cart ({Object.keys(addedProducts).length})</Link>
    </div>
  );
}

export default BtnCart;