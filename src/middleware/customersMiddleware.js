import axios from 'axios';
import { API } from './commonMiddleware';
import {
  FETCH_CUSTOMERS,
  loadCustomers,
  POST_CUSTOMER,
  createCustomer,
  PUT_CUSTOMER,
  updateCustomer,
  DELETE_CUSTOMER,
  destroyCustomer,
} from '../actions/customers';

const customersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      axios
        .get(`${API}/customers`)
        .then((response) => {
          store.dispatch(loadCustomers(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case POST_CUSTOMER:
      axios
        .post(`${API}/customers/create`, action.data)
        .then((response) => {
          store.dispatch(createCustomer(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case PUT_CUSTOMER:
      axios
        .put(`${API}/customers/update/${action.data.id}`, action.data)
        .then(() => {
          store.dispatch(updateCustomer(action.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case DELETE_CUSTOMER:
      axios
        .delete(`${API}/customers/delete/${action.id}`)
        .then(() => {
          store.dispatch(destroyCustomer(action.id));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
  }

  next(action);
};

export default customersMiddleware;
