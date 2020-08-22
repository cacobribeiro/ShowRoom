import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/SuperMarket Comp/Header';
import Loading from '../../components/Loading';
import { fetchID } from '../../actions/SuperMarket Actions/dataCart';
import Carousel from '../../components/SuperMarket Comp/Carousel';

function DetailPage(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.dataCart.idLoading);

  const product = useSelector((state) => state.dataCart.ByID);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(fetchID(id));
    // eslint-disable-next-line
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
          <div class="card w-100 mb-3">
            <div className="mb-2 w-50 m-auto">
              <Carousel pictures={product.pictures} settings={'display'} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Preço: R$ {product.price}</p>
              <p className="card-text">Estoque disponivel: {product.available_quantity} unid.</p>
              <p className="card-text">
                Garantia: {product.warranty ? product.warranty : 'Não contém'}
              </p>
              {product.attributes.map((e) => (
                <p key={e.id} className="card-text">
                  {e.name}: {e.value_name}
                </p>
              ))}

              <p className="card-text">
                <small className="text-muted">{product.last_updated}</small>
              </p>
              {product.condition === 'new' ? (
                <p className="badge badge-success">NOVO</p>
              ) : (
                <p className="badge badge-warning">USADO</p>
              )}
              {product.shipping.free_shipping ? (
                <span className="badge float-right badge-primary">FRETE GRÁTIS!</span>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
