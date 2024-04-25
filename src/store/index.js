import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import authReducer from '../reducers/authReducer';
import customersReducer from '../reducers/customersReducer';
import embroideriesReducer from '../reducers/embroideriesReducer';
import textilesReducer from '../reducers/textilesReducer';
import productsReducer from '../reducers/productsReducer';
import quotationsReducer from '../reducers/quotationsReducer';
import authMiddleware from '../middleware/authMiddleware';
import customersMiddleware from '../middleware/customersMiddleware';
import embroideriesMiddleware from '../middleware/embroideriesMiddleware';
import textilesMiddleware from '../middleware/textilesMiddleware';
import productsMiddleware from '../middleware/productsMiddleware';
import quotationsMiddleware from '../middleware/quotationsMiddleware';

const rootReducer = combineReducers({
  auth: authReducer,
  customers: customersReducer,
  embroideries: embroideriesReducer,
  textiles: textilesReducer,
  products: productsReducer,
  quotations: quotationsReducer,
});

const enhancer = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    customersMiddleware,
    embroideriesMiddleware,
    textilesMiddleware,
    productsMiddleware,
    quotationsMiddleware
    // other middlewares
  )
);

const store = createStore(
  // le reducer
  rootReducer,
  // le enhancer
  enhancer
);

export default store;
