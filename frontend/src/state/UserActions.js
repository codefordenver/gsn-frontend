
import { createAction } from 'utils/actionUtils';
import { getUserState, loginUser, signupUser } from 'services/authServices';

import history from 'utils/history';
import {
  SET_TOKEN,
  SET_USERNAME,
  SET_LOADING,
  SET_IS_LOGGED_IN,
  SET_ERROR,
  CLEAR_ERROR,
} from './UserConstants';

export const setToken = createAction(SET_TOKEN);
export const setUsername = createAction(SET_USERNAME);
export const setLoading = createAction(SET_LOADING);
export const setIsLoggedIn = createAction(SET_IS_LOGGED_IN);
export const setError = createAction(SET_ERROR);
export const clearError = createAction(CLEAR_ERROR);

export const setUserState = () => (dispatch) => {
  const token = localStorage.getItem('token');

  if (token != null) {
    dispatch(authRequest());
    getUserState(token)
      .then((json) => {
        dispatch(setUsername(json.username));
        dispatch(setIsLoggedIn(true));
        dispatch(setLoading(false));
      }).catch((error) => {
        dispatch(authError(error));
      });
  } else {
    dispatch(setLoading(false));
    dispatch(setIsLoggedIn(false));
  }
};

export const logIn = ({ username, password, path = '/student' }) => (dispatch) => {
  dispatch(authRequest());
  loginUser({ username, password })
    .then((json) => {
      dispatch(
        authSuccess({
          token: json.token,
          username: json.user.username,
        }),
      );
      history.push(path);
    }).catch((error) => {
      dispatch(authError(error));
    });
};

export const register = ({ username, password, path = '/students' }) => (dispatch) => {
  dispatch(setLoading(true));
  signupUser({ username, password })
    .then((json) => {
      // console.log('register json', json);
      dispatch(setLoading(false));
      dispatch(
        authSuccess({
          token: json.token,
          username: json.username,
        }),
      );
      history.push(path);
    }).catch((error) => {
      dispatch(authError(error));
    });
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setIsLoggedIn(false));
  dispatch(setUsername(null));
};

export const authRequest = () => (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearError());
};

export const authSuccess = user => (dispatch) => {
  console.log('authSuccess', user);
  if (user) {
    const { username, token } = user;
    dispatch(setLoading(false));
    dispatch(setIsLoggedIn(true));
    dispatch(setUsername(username));
    dispatch(setToken(token));
    localStorage.setItem('token', token);
  } else {
    console.error('null passed into authSuccess');
  }
};

export const authError = error => (dispatch) => {
  dispatch(setLoading(false));
  dispatch(logOut());
  console.error({ error });
  dispatch(setError(error.message));
};
