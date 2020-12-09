import React from 'react';
import BtnCart from './BtnCart';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-red-300 flex justify-between items-center w-full py-4 px-8 mb-8">
      <div>[LOGO]</div>
      <Link to='/'>Kelisto JS Challenge</Link>
      <BtnCart />
    </div>
  );
}

export default Header;