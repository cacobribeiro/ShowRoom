import {
  API_REQUEST_DATA,
  API_REQUEST_DATA_SUCESS,
  BYID,
  BYIDSUCCESS,
} from '../../actions/SuperMarket Actions/dataCart';

const INITIAL_STATE = {
  ByID: [],
  cart: [],
  data: [],
  productsLoading: true,
  idLoading: true,
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
        data: action.data.results,
        productsLoading: false,
      };
    case BYID:
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };
    case BYIDSUCCESS:
      return {
        ...state,
        ByID: action.data,
        idLoading: action.idLoading,
      };
    default:
      return state;
  }
};
