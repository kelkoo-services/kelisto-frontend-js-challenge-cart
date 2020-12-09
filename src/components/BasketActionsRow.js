import React from 'react';
import Btn from './Btn';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../store/actions/basket';
import IconBack from './icons/IconBack';
import IconTrash from './icons/IconTrash';
import IconCheck from './icons/IconCheck';

const BasketActionsRow = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    alert('Order Placed. Thanks!');
    history.push('/');
    dispatch(clearBasket());
  }

  return (
    <div className="flex justify-between mb-4 w-full">
      <div className="flex">
        <div className="mr-2">
          <Btn action={() => history.goBack()}>
            <div className="mr-2"><IconBack /></div>
            Go Back
            </Btn>
        </div>
        <div>
          <Btn action={() => dispatch(clearBasket())}>
            <div className="mr-2"><IconTrash /></div>
            Clear Basket
            </Btn>
        </div>
      </div>
      <div>
        <Btn type='secondary' action={() => handlePlaceOrder()}>
          <div className="mr-2"><IconCheck /></div>
          Place Order
          </Btn>
      </div>
    </div>
  );
}

export default BasketActionsRow;