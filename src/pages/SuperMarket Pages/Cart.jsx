import React, { useEffect } from 'react';
import Header from '../../components/SuperMarket Comp/Header';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);

  return (
    <div className="container-lx">
      <Header />
      <div className="d-flex justify-content-center flex-clomun">
        {cart === null ? (
          <div>Você não tem nenhum produto no carrinho.</div>
        ) : (
          <ul class="list-group w-100 px-3">
            {cart.filter((product, index) => {
              cart.map((e, index) => {
                const quantity = cart.filter((product) => e.id === product.id).length;
                console.log(quantity);
                const { id, title, price, condition, thumbnail, shipping } = e;
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="badge badge-primary badge-pill">{index + 1}</span>
                    {title}
                    <span class="badge badge-primary badge-pill mx-5">{index}</span>
                    <span class="badge badge-primary badge-pill mx-5">{price}</span>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <label class="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" checked /> Active
                      </label>
                      <label class="btn btn-secondary">
                        <input type="radio" name="options" id="option2" /> Radio
                      </label>
                      <label class="btn btn-secondary">
                        <input type="radio" name="options" id="option3" /> Radio
                      </label>
                    </div>
                  </li>
                );
              });
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
