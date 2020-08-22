import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import Loading from '../Loading';

function ProductList() {
  const products = useSelector((state) => state.dataCart.data);
  const loading = useSelector((state) => state.dataCart.productsLoading);

  if (loading) return <Loading />;
  return (
    <div class="row row-cols-1 row-cols-md-3">
      {products.map((e) => (
        <Cards product={e} />
      ))}
    </div>
  );
}

export default ProductList;
