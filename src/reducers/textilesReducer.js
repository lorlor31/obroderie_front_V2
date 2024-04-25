import {
  LOAD_TEXTILES,
  LOAD_TEXTILE,
  RESET_TEXTILE,
  CREATE_TEXTILE,
  UPDATE_TEXTILE,
  DESTROY_TEXTILE,
  UPDATE_TEXTILE_FIELD,
} from '../actions/textiles';

export const initialState = {
  textileList: [],
  textileCurrent: {},
  isTextilesLoaded: false,
  isTextileLoaded: false,
};

const textilesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_TEXTILES:
      return {
        ...state,
        textileList: action.textiles,
        isTextilesLoaded: true,
      };

    case LOAD_TEXTILE:
      return {
        ...state,
        textileCurrent: state.textileList.find((x) => x.id === action.id),
        isTextileLoaded: true,
      };

    case RESET_TEXTILE:
      return {
        ...state,
        textileCurrent: {},
        isTextileLoaded: false,
      };

    case CREATE_TEXTILE:
      return {
        ...state,
        textileList: [...state.textileList, action.data],
      };

    case UPDATE_TEXTILE:
      return {
        ...state,
        textileList: state.textileList.map((obj) =>
          obj.id === action.data.id ? { ...obj, ...action.data } : obj
        ),
      };

    case DESTROY_TEXTILE:
      return {
        ...state,
        textileList: state.textileList.filter((obj) => obj.id !== action.id),
      };

    case UPDATE_TEXTILE_FIELD:
      return {
        ...state,
        textileCurrent: {
          ...state.textileCurrent,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};

export default textilesReducer;
