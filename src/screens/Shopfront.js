import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductContainer from '../components/ProductContainer';
import { fetchProducts } from '../store/actions/products';

const Shopfront = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ProductContainer />
      <Footer />
    </>
  );
}

export default Shopfront;