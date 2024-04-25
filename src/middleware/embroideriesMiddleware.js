import axios from 'axios';
import { API } from './commonMiddleware';
import {
  FETCH_EMBROIDERIES,
  loadEmbroideries,
  POST_EMBROIDERY,
  createEmbroidery,
  PUT_EMBROIDERY,
  updateEmbroidery,
  DELETE_EMBROIDERY,
  destroyEmbroidery,
} from '../actions/embroideries';

const embroideriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EMBROIDERIES:
      axios
        .get(`${API}/embroideries`)
        .then((response) => {
          store.dispatch(loadEmbroideries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case POST_EMBROIDERY:
      axios
        .post(`${API}/embroideries/create`, action.data)
        .then((response) => {
          store.dispatch(createEmbroidery(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case PUT_EMBROIDERY:
      axios
        .put(`${API}/embroideries/update/${action.data.id}`, action.data)
        .then(() => {
          store.dispatch(updateEmbroidery(action.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case DELETE_EMBROIDERY:
      axios
        .delete(`${API}/embroideries/delete/${action.id}`)
        .then(() => {
          store.dispatch(destroyEmbroidery(action.id));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
  }

  next(action);
};

export default embroideriesMiddleware;
