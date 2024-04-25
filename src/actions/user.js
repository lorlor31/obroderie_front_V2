export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const LOGOUT = 'LOGOUT';

export const changeLoginField = (name, value) => ({
  type: CHANGE_LOGIN_FIELD,
  name,
  value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulLogin = (username, token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  username,
  token,
});

export const logout = () => ({
  type: LOGOUT,
});
