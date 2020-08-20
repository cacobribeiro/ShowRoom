import { API_REQUEST_DATA, API_REQUEST_DATA_SUCESS } from '../actions/dataCart';

const INITIAL_STATE = {
  data: [],
  productsLoading: true,
};

export const dataCart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST_DATA:
      return {
        ...state,
        productsLoading: true,
      };
    case API_REQUEST_DATA_SUCESS:
      return {
        ...state,
        data: [...state.data, action.data],
        productsLoading: false,
      };
    default:
      return state;
  }
};
