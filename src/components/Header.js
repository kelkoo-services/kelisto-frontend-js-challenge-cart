import React from 'react';
import Btn from './Btn';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const addedProducts = useSelector(state => state.cart.addedProducts);

  const serveCartCount = () => {
    let count = 0;
    for (const productId in addedProducts) {
      count += addedProducts[productId].amount;
    }
    return count;
  }

  return (
    <div className="bg-red-300 flex justify-between items-center w-full py-4 px-8 mb-8">
      <div>[LOGO]</div>
      <Link to='/'>Kelisto JS Challenge</Link>
      <Btn><Link to='/cart'>Cart ({serveCartCount()})</Link></Btn>
    </div>
  );
}

export default Header;