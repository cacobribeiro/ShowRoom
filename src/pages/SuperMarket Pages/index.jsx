import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/SuperMarket Actions/dataCart';
import Header from '../../components/SuperMarket Comp/Header';
import ProductList from '../../components/SuperMarket Comp/ProductList';

function SuperMarket() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-lx">
      <Header />
      <ProductList />
    </div>
  );
}

export default SuperMarket;
