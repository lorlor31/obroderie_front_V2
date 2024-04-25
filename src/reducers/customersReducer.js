import {
  LOAD_CUSTOMERS,
  LOAD_CUSTOMER,
  RESET_CUSTOMER,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DESTROY_CUSTOMER,
  UPDATE_CUSTOMER_FIELD,
} from '../actions/customers';

export const initialState = {
  customerList: [],
  customerCurrent: {},
  isCustomersLoaded: false,
  isCustomerLoaded: false,
};

const customersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CUSTOMERS:
      return {
        ...state,
        customerList: action.customers,
        isCustomersLoaded: true,
      };

    case LOAD_CUSTOMER:
      return {
        ...state,
        customerCurrent: state.customerList.find((x) => x.id === action.id),
        isCustomerLoaded: true,
      };

    case RESET_CUSTOMER:
      return {
        ...state,
        customerCurrent: {},
        isCustomerLoaded: false,
      };

    case CREATE_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList, action.data],
      };

    case UPDATE_CUSTOMER:
      return {
        ...state,
        customerList: state.customerList.map((obj) =>
          obj.id === action.data.id ? { ...obj, ...action.data } : obj
        ),
      };

    case DESTROY_CUSTOMER:
      return {
        ...state,
        customerList: state.customerList.filter((obj) => obj.id !== action.id),
      };

    case UPDATE_CUSTOMER_FIELD:
      return {
        ...state,
        customerCurrent: {
          ...state.customerCurrent,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};

export default customersReducer;
