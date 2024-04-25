import {
  LOAD_QUOTATIONS,
  LOAD_QUOTATION,
  CREATE_QUOTATION,
  UPDATE_QUOTATION,
  DESTROY_QUOTATION,
  RESET_QUOTATION,
  UPDATE_QUOTATION_FIELD,
} from '../actions/quotations';

export const initialState = {
  quotationList: [],
  quotationCurrent: {},
  isQuotationsLoaded: false,
  isQuotationLoaded: false,
};

const quotationsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_QUOTATIONS:
      return {
        ...state,
        quotationList: action.quotations,
        isQuotationsLoaded: true,
      };

    case LOAD_QUOTATION:
      return {
        ...state,
        quotationCurrent: state.quotationList.find((x) => x.id === action.id),
        isQuotationLoaded: true,
      };

    case RESET_QUOTATION:
      return {
        ...state,
        quotationCurrent: {},
        isQuotationLoaded: false,
      };

    case CREATE_QUOTATION:
      return {
        ...state,
        quotationList: [...state.quotationList, action.data],
      };

    case UPDATE_QUOTATION:
      return {
        ...state,
        quotationList: state.quotationList.map((quotation) =>
          quotation.id === action.data.id
            ? { ...quotation, ...action.data }
            : quotation
        ),
      };

    case DESTROY_QUOTATION:
      return {
        ...state,
        quotationList: state.quotationList.filter(
          (obj) => obj.id !== action.id
        ),
      };

    case UPDATE_QUOTATION_FIELD:
      return {
        ...state,
        quotationCurrent: {
          ...state.quotationCurrent,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};

export default quotationsReducer;
