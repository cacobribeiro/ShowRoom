import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Cards(props) {
  const dispatch = useDispatch();
  const { id, title, price, available_quantity, condition, thumbnail, shipping } = props.product;
  const product = props.product;
  return (
    <div class="col mb-4">
      <div class="card h-100">
        <Link to={`/project/supermarket/product/${id}`}>
          <img src={thumbnail} class=" border card-img-top" alt={id} />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">Preço: R$ {price}</p>
            {condition === 'new' ? (
              <p class="badge badge-success">NOVO</p>
            ) : (
              <p class="badge badge-warning">USADO</p>
            )}
            {shipping.free_shipping ? (
              <span class="badge float-right badge-primary">FRETE GRÁTIS!</span>
            ) : null}
          </div>
        </Link>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', cart: product })}
          type="button"
          class="btn btn-success"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Cards;
