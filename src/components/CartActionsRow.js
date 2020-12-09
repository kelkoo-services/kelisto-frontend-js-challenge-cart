import React from 'react';
import Btn from './Btn';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/actions/cart';

const CartActionsRow = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    alert('Order Placed. Thanks!');
    history.push('/');
    dispatch(clearCart());
  }

  return (
    <div className="w-full flex justify-between mb-4">
      <div className="flex">
        <Btn action={() => history.goBack()}>Go Back</Btn>
        <Btn action={() => dispatch(clearCart())}>Clear Cart</Btn>
      </div>
      <Btn action={() => handlePlaceOrder()}>Place Order</Btn>
    </div>
  );
}

export default CartActionsRow;