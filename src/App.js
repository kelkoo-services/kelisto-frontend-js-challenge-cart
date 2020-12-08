import React, { useState } from 'react';
import json from './data/products.json'
import './App.css';

import Products from './Components/Products';
import Cart from './Components/Cart';

function App() {
  const [basket, setBasket] = useState([])
  const [showCart, setShowCart] = useState(false)

  // Click handler to add product to basket
  const onClickHandler = (product) => {
    setBasket([
      ...basket,
      product
    ])
  }

  // Open and close the Cart
  const showCartHandler = () => {
    setShowCart(!showCart)
  }

  // Delete Handler
  const onDeleteHandler = id => {
    setBasket(basket.filter(product => product.productId !== id));
  };

  return (
    <div className="App">
      <div className="basket container">
        <button onClick={showCartHandler}>Your basket</button>
      </div>
      <Products json={json} onClickHandler={onClickHandler} />
      <Cart basket={basket} showCart={showCart} onClickHandler={onClickHandler} onDeleteHandler={onDeleteHandler} />
    </div>
  );
}

export default App;
