import React from 'react';
import { Link } from 'react-router-dom';
import ShopIcon from './Icons/Shop';
import CartIcon from './Icons/CartIcon';
import ArrowL from './Icons/ArrowL';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput } from '../../actions/SuperMarket Actions/SearchInput';
import { fetchProducts } from '../../actions/SuperMarket Actions/dataCart';

function Header() {
  const dispatch = useDispatch();
  const searchbar = useSelector((state) => state.SearchInput.name);

  return (
    <nav className="mb-5 navbar navbar-light bg-light">
      <ArrowL />
      <div>
        <Link style={{ color: 'black' }} to="/project/supermarket">
          <ShopIcon />
        </Link>
      </div>
      <form className="form-inline">
        <input
          style={{ width: '70%' }}
          className="form-control mr-sm-2"
          type="search"
          value={searchbar}
          onChange={(e) => dispatch(SearchInput(e.target.value))}
          placeholder="We Find"
          aria-label="Search"
        />
        <button
          onClick={() => dispatch(fetchProducts(searchbar))}
          className="btn btn-outline-success my-2 my-sm-0"
          type="button"
        >
          Search
        </button>
      </form>
      <Link style={{ color: 'black' }} to="project/supermarket/cart">
        <CartIcon />
      </Link>
    </nav>
  );
}

export default Header;
