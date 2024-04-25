import {
  CHANGE_LOGIN_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  LOGOUT,
} from '../actions/user';

export const initialState = {
  logged: false,

  token: '',

  user: { username: 'admin', password: 'admin' },
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        logged: true,
        username: action.username,
        token: action.token,
      };

    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        user: { ...state.user, [action.name]: action.value },
      };

    case LOGOUT:
      return {
        ...state,
        logged: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
