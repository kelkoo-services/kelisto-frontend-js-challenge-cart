import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToBasket as addToBasketAction,
  removeFromBasket as removeFromBasketAction,
  deductFromBasket as deductFromBasketAction,
} from "../actions/checkout";
import { getBasketTotal } from "../selector/checkout";
import {
  StyledCheckout,
  StyledCheckoutHeading,
  StyledItemList,
  StyledItem,
  StyledActions,
  StyledRemove,
  StyledLink,
} from "./Checkout.styles";

function Checkout() {
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();
  const addToBasket = (item, price) => {
    dispatch(addToBasketAction(item, price));
  };
  const removeFromBasket = (item) => {
    dispatch(removeFromBasketAction(item));
  };
  const deductFromBasket = (item) => {
    dispatch(deductFromBasketAction(item));
  };

  const totalPrice = useSelector(getBasketTotal);
  const getSubTotal = (price, qty) => {
    let sub = price * qty;
    return sub.toFixed(2);
  };

  return (
    <StyledCheckout>
      <StyledCheckoutHeading>
        <StyledLink to="/">{"<"} Back to store</StyledLink>

        <h2>Welcome to the checkout</h2>
        <h3>Please review your basket</h3>
        <h3>Total Price £{totalPrice}</h3>
      </StyledCheckoutHeading>
      <StyledItemList>
        {basket.map((item, index) => (
          <StyledItem key={index}>
            {console.log(item)}
            <div>
              {item.item} : £{item.price}
            </div>
            <div> SubTotal: £{getSubTotal(item.price, item.qty)}</div>

            <StyledActions>
              <button onClick={() => deductFromBasket(item.item)}>-</button>
              <div>Qty: {item.qty}</div>
              <button onClick={() => addToBasket(item.item, item.price)}>
                +
              </button>
            </StyledActions>

            <StyledRemove onClick={() => removeFromBasket(item.item)}>
              Remove From Basket
            </StyledRemove>
          </StyledItem>
        ))}
      </StyledItemList>
    </StyledCheckout>
  );
}

export default Checkout;
