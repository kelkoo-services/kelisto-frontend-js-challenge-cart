import React from 'react';
import Btn from './Btn';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconBasket from './icons/IconBasket';

const Header = () => {
  const addedProducts = useSelector(state => state.basket.addedProducts);

  const serveBasketCount = () => {
    let count = 0;
    for (const productId in addedProducts) {
      count += addedProducts[productId].amount;
    }
    return count;
  }

  return (
    <div className="bg-custom-purple text-white fixed flex justify-between items-center w-full py-4 px-8 mb-8">
      <Link to='/'>
        <img alt="Kelisto Logo" className="h-6 w-auto" src="/assets/kelisto-logo.png" />
      </Link>
      <Link to='/'><h1 className="text-xl font-semibold">Kelisto JS Challenge</h1></Link>
      <div>
        <Btn type={'secondary'}>
          <div className="mr-2"><IconBasket /></div>
          <Link to='/basket'>Basket ({serveBasketCount()})</Link>
        </Btn>
      </div>

    </div>
  );
}

export default Header;