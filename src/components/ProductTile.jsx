import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket as addToBasketAction } from "../actions/checkout";
import {
  StyledTile,
  StyledButton,
  StyledImage,
  StyledDetails,
} from "./ProductTile.styles";

function ProductTile({ product }) {
  const dispatch = useDispatch();
  const addToBasket = (item, price) => {
    dispatch(addToBasketAction(item, price));
  };

  return (
    <StyledTile>
      <StyledImage src={`./data/${product.image}`} alt="img" />
      <StyledDetails>
        <div>{product.title}</div>
        <div>{product.sku}</div>
        <div>£{product.price}</div>
      </StyledDetails>
      <StyledButton
        onClick={() =>
          addToBasket(`${product.title} , ${product.sku}`, product.price)
        }
      >
        Add to Basket
      </StyledButton>
    </StyledTile>
  );
}

export default ProductTile;
