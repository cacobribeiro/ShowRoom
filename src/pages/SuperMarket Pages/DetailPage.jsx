import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/SuperMarket Comp/Header';
import Loading from '../../components/Loading';
import { fetchID } from '../../actions/SuperMarket Actions/dataCart';
import Carousel from '../../components/SuperMarket Comp/Carousel';

function DetailPage(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.dataCart.idLoading);
  const variations = useSelector((state) => state.dataCart.idLoading);

  const product = useSelector((state) => state.dataCart.ByID);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(fetchID(id));
  }, []);

  return (
    <div className="container-lg">
      <div>
        <Header />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="justify-content-center d-flex w-100">
          <div class="card w-50 mb-3">
            <div>
              <Carousel pictures={product.pictures} settings={'display'} />
            </div>
            <div>
              <Carousel pictures={product.variations} settings={'static'} />
            </div>
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">Preço: R$ {product.price}</p>
              <p class="card-text">Estoque disponivel: {product.available_quantity} unid.</p>
              <p class="card-text">Garantia: {product.warranty}</p>
              <p class="card-text">
                <small class="text-muted">{product.last_updated}</small>
              </p>
              {product.condition === 'new' ? (
                <p class="badge badge-success">NOVO</p>
              ) : (
                <p class="badge badge-warning">USADO</p>
              )}
              {product.shipping.free_shipping ? (
                <span class="badge float-right badge-primary">FRETE GRÁTIS!</span>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
