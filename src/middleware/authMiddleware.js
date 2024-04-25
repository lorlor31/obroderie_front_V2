import axios from 'axios';

import { SUBMIT_LOGIN, handleSuccessfulLogin } from '../actions/user';
import { API } from './commonMiddleware';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          `${API}/login_check`,

          {
            username: store.getState().auth.user.username,
            password: store.getState().auth.user.password,
          }
        )
        .then((response) => {
          store.dispatch(
            handleSuccessfulLogin(response.data.username, response.data.token)
          );
        })
        .catch((error) => {
          alert("Nom d'utilisateur ou mot de passe incorrect");
        });
      break;

    default:
  }

  next(action);
};

export default authMiddleware;
