import { ProductAPI, getById } from '../../services/ProductsAPI';

export const API_REQUEST_DATA = 'API_REQUEST_DATA';
export const API_REQUEST_DATA_SUCESS = 'API_REQUEST_DATA_SUCESS';
export const BYID = 'BYID';
export const BYIDSUCCESS = 'BYIDSUCCESS';

export const dataCart = () => ({
  type: API_REQUEST_DATA,
  productsLoading: true,
});

export const dataCartSucess = (data) => ({
  type: API_REQUEST_DATA_SUCESS,
  data,
  productsLoading: false,
});

export const byId = () => ({
  type: BYID,
  idLoading: true,
});

export const byIdSuccess = (data) => ({
  type: BYIDSUCCESS,
  data,
  idLoading: false,
});

export function fetchProducts(searchbar) {
  return (dispatch) => {
    dispatch(dataCart());
    return ProductAPI(searchbar).then((data) => dispatch(dataCartSucess(data)));
  };
}

export function fetchID(id) {
  return (dispatch) => {
    dispatch(byId());
    return getById(id).then((data) => dispatch(byIdSuccess(data)));
  };
}
