import ProductAPI from '../services/ProductsAPI';
export const API_REQUEST_DATA = 'API_REQUEST_DATA';
export const API_REQUEST_DATA_SUCESS = 'API_REQUEST_DATA_SUCESS';

export const dataCart = () => ({
  type: API_REQUEST_DATA,
  productsLoading: true,
});

export const dataCartSucess = (data) => ({
  type: API_REQUEST_DATA_SUCESS,
  data,
  productsLoading: false,
});

export function fetchProducts(searchInput) {
  return (dispatch) => {
    dispatch(dataCart());

    return ProductAPI(searchInput).then((data) => dispatch(dataCartSucess(data)));
  };
}
