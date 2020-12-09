import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductContainer = () => {
  const productList = useSelector(state => state.products.list);

  return (
    <ul className="bg-blue-200 w-full flex flex-wrap justify-center">
      {productList.map(product => <li key={product.productId}><ProductCard product={product} /></li>)}
    </ul>
  );
}

export default ProductContainer;