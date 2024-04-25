import {
  LOAD_PRODUCTS,
  LOAD_PRODUCT,
  RESET_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DESTROY_PRODUCT,
  UPDATE_PRODUCT_FIELD,
  LOAD_PRODUCT_FROM_QUOTATION,
} from '../actions/products';

export const initialState = {
  productList: [],
  isProductsLoaded: false,
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        productList: action.products,
        isProductsLoaded: true,
      };

    case LOAD_PRODUCT:
      return {
        ...state,
        productCurrent: state.productList.find((x) => x.id === action.id),
        isProductLoaded: true,
      };

    case RESET_PRODUCT:
      return {
        ...state,
        productCurrent: {},
        isProductsLoaded: false,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        productList: [...state.productList, action.data],
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        productList: state.productList.map((obj) =>
          obj.id === action.data.id ? { ...obj, ...action.data } : obj
        ),
      };

    case DESTROY_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter((obj) => obj.id !== action.id),
      };

    case UPDATE_PRODUCT_FIELD:
      return {
        ...state,
        productList: state.productList.map((obj) =>
          obj.id === action.id ? { ...obj, [action.name]: action.value } : obj
        ),
      };

    case LOAD_PRODUCT_FROM_QUOTATION:
      return {
        ...state,
        productList: action.products,
        isProductsLoaded: true,
      };

    default:
      return state;
  }
};

export default productsReducer;
