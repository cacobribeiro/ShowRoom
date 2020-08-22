import { SEARCH_NAME } from '../../actions/SuperMarket Actions/SearchInput.js';

const INITIAL_STATE = {
  name: '',
};

export const SearchInput = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
