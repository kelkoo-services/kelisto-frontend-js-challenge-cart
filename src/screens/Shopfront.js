import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import ItemContainer from '../components/ItemContainer';
import { fetchItems } from '../store/actions/shop';

const Shopfront = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ItemContainer />
    </>
  );
}

export default Shopfront;