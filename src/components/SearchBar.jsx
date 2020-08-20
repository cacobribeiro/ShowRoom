import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput } from '../actions/SearchInput';

function SearchBar() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.SearchInput.name);
  return (
    <div>
      <input
        value={inputValue}
        placeholder="O que você deseja comprar Hoje?"
        onChange={(e) => dispatch(SearchInput(e.target.value))}
      />
    </div>
  );
}

export default SearchBar;
