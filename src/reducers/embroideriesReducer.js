import {
  LOAD_EMBROIDERIES,
  LOAD_EMBROIDERY,
  RESET_EMBROIDERY,
  CREATE_EMBROIDERY,
  UPDATE_EMBROIDERY,
  DESTROY_EMBROIDERY,
  UPDATE_EMBROIDERY_FIELD,
} from '../actions/embroideries';

export const initialState = {
  embroideryList: [],
  embroideryCurrent: {},
  isEmbroideriesLoaded: false,
  isEmbroideryLoaded: false,
};

const embroideriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_EMBROIDERIES:
      return {
        ...state,
        embroideryList: action.embroideries,
        isEmbroideriesLoaded: true,
      };

    case LOAD_EMBROIDERY:
      return {
        ...state,
        embroideryCurrent: state.embroideryList.find((x) => x.id === action.id),
        isEmbroideryLoaded: true,
      };

    case RESET_EMBROIDERY:
      return {
        ...state,
        embroideryCurrent: {},
        isEmbroideryLoaded: false,
      };

    case CREATE_EMBROIDERY:
      return {
        ...state,
        embroideryList: [...state.embroideryList, action.data],
      };

    case UPDATE_EMBROIDERY:
      return {
        ...state,
        embroideryList: state.embroideryList.map((obj) =>
          obj.id === action.data.id ? { ...obj, ...action.data } : obj
        ),
      };

    case DESTROY_EMBROIDERY:
      return {
        ...state,
        embroideryList: state.embroideryList.filter(
          (obj) => obj.id !== action.id
        ),
      };

    case UPDATE_EMBROIDERY_FIELD:
      return {
        ...state,
        embroideryCurrent: {
          ...state.embroideryCurrent,
          [action.name]: action.value,
        },
      };

    default:
      return state;
  }
};

export default embroideriesReducer;
