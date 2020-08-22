import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Cards(props) {
  const dispatch = useDispatch();
  const { id, title, price, condition, thumbnail, shipping } = props.product;
  const product = props.product;
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <Link to={`/project/supermarket/product/${id}`}>
          <img src={thumbnail} className=" border card-img-top" alt={id} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Preço: R$ {price}</p>
            {condition === 'new' ? (
              <p className="badge badge-success">NOVO</p>
            ) : (
              <p className="badge badge-warning">USADO</p>
            )}
            {shipping.free_shipping ? (
              <span className="badge float-right badge-primary">FRETE GRÁTIS!</span>
            ) : null}
          </div>
        </Link>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', cart: product })}
          type="button"
          className="btn btn-success"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Cards;
