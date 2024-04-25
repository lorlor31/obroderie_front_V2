import axios from 'axios';
import { API } from './commonMiddleware';
import {
  FETCH_QUOTATIONS,
  loadQuotations,
  POST_QUOTATION,
  createQuotation,
  PUT_QUOTATION,
  updateQuotation,
  DELETE_QUOTATION,
  destroyQuotation,
  FETCH_QUOTATION_PDF,
} from '../actions/quotations';

const quotationsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUOTATIONS:
      axios
        .get(`${API}/contracts/type/quotation`)
        .then((response) => {
          store.dispatch(loadQuotations(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case POST_QUOTATION:
      axios
        .post(`${API}/contracts/create`, action.data.backData)
        .then((response) => {
          store.dispatch(createQuotation(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case PUT_QUOTATION:
      axios
        .put(`${API}/contracts/update/${action.quotation.id}`, action.quotation)
        .then(
          action.products.map((product) =>
            axios.put(`${API}/products/update/${product.id}`, product)
          )
        )
        .then(() => {
          store.dispatch(updateQuotation(action.frontData));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case DELETE_QUOTATION:
      axios
        .delete(`${API}/contracts/delete/${action.quotationId}`)
        .then(
          action.productsId.map((id) =>
            axios.delete(`${API}/products/delete/${id}`)
          )
        )
        .then(() => {
          store.dispatch(destroyQuotation(action.quotationId));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case FETCH_QUOTATION_PDF:
      axios.get(`${API}/contracts/${action.id}/renderpdf`).catch((error) => {
        console.warn(error);
      });
      break;

    default:
  }

  next(action);
};

export default quotationsMiddleware;
