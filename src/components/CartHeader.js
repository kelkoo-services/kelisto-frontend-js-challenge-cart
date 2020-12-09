import React from 'react';

const CartHeader = () => {
  return (
    <div className="flex px-4 py-3">

      <div className="h-6 w-14 mr-2">
      </div>

      <div className="flex-grow">
        <h2 className="font-bold">Product Name</h2>
        <span className="sku">SKU</span>
      </div>

      <div className="flex justify-between w-2/5">
        <span className="flex flex-1 justify-center">Amount</span>
        <span className="flex flex-1 justify-center">Unit Price</span>
        <span className="flex flex-1 justify-center">Sum Price</span>
      </div>
    </div>
  );
}

export default CartHeader;