import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-custom-purple text-white flex justify-center items-center w-full py-6 px-8 mt-8">
      <Link to='/'>
        <img alt="Kelisto Logo" className="h-6 w-auto" src="/assets/kelisto-logo.png" />
      </Link>
    </div>
  );
}

export default Footer;