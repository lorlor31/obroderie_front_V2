import axios from 'axios';
import { API } from './commonMiddleware';
import {
  FETCH_PRODUCTS,
  loadProducts,
  POST_PRODUCT,
  createProduct,
  PUT_PRODUCT,
  updateProduct,
  DELETE_PRODUCT,
  destroyProduct,
} from '../actions/products';

const productsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios
        .get(`${API}/products`)
        .then((response) => {
          store.dispatch(loadProducts(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case POST_PRODUCT:
      axios
        .post(`${API}/products/create`, action.data)
        .then((response) => {
          store.dispatch(createProduct(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case PUT_PRODUCT:
      axios
        .put(`${API}/products/update/${action.data.id}`, action.data)
        .then(() => {
          store.dispatch(updateProduct(action.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case DELETE_PRODUCT:
      axios
        .delete(`${API}/products/delete/${action.id}`)
        .then(() => {
          store.dispatch(destroyProduct(action.id));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
  }

  next(action);
};

export default productsMiddleware;
