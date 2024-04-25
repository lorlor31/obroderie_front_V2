import axios from 'axios';
import { API } from './commonMiddleware';
import {
  FETCH_TEXTILES,
  loadTextiles,
  POST_TEXTILE,
  createTextile,
  PUT_TEXTILE,
  updateTextile,
  DELETE_TEXTILE,
  destroyTextile,
} from '../actions/textiles';

const textilesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TEXTILES:
      axios
        .get(`${API}/textiles`)
        .then((response) => {
          store.dispatch(loadTextiles(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case POST_TEXTILE:
      axios
        .post(`${API}/textiles/create`, action.data)
        .then((response) => {
          store.dispatch(createTextile(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case PUT_TEXTILE:
      axios
        .put(`${API}/textiles/update/${action.data.id}`, action.data)
        .then(() => {
          store.dispatch(updateTextile(action.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case DELETE_TEXTILE:
      axios
        .delete(`${API}/textiles/delete/${action.id}`)
        .then(() => {
          store.dispatch(destroyTextile(action.id));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
  }

  next(action);
};

export default textilesMiddleware;
