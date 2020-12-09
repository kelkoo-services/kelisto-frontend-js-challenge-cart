import React from 'react';

const CartHeader = () => {
  return (
    <div className="flex mb-8 ">

      <div className="h-14 w-14 mr-2">
      </div>

      <div className="flex-grow">
        <h2 className="font-bold">Product Name</h2>
        <span>SKU</span>
      </div>

      <div className="flex justify-between w-2/5">
        <span className="bg-red-200 flex flex-1 justify-center">Amount</span>
        <span className="bg-pink-200 flex flex-1 justify-center">Unit Price</span>
        <span className="bg-green-200 flex flex-1 justify-center">Sum Price</span>
      </div>
    </div>
  );
}

export default CartHeader;