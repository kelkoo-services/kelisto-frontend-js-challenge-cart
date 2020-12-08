import React from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';

const ItemContainer = () => {
  const items = useSelector(state => state.shop.items);

  return (
    <ul className="bg-blue-200 w-full flex flex-wrap justify-center">
      {items.map(item => <li key={item.productId}><ItemCard item={item} /></li>)}
    </ul>
  );
}

export default ItemContainer;