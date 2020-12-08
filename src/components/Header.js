import React from 'react';
import BtnCart from './BtnCart';

const Header = () => {
  return (
    <div className="bg-red-300 flex justify-between items-center w-full py-4 px-8 mb-8">
      <div>[LOGO]</div>
      <div>Kelisto JS Challenge</div>
      <BtnCart />
    </div>
  );
}

export default Header;