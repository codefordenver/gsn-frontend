import {
  SET_TOKEN,
  SET_USERNAME,
  SET_LOADING,
  SET_IS_LOGGED_IN,
  SET_ERROR,
  CLEAR_ERROR,
} from './UserConstants';

import {createAction} from 'utils/ActionUtils';
import {getUserState, loginUser, signupUser} from 'services/authServices';

import { history } from 'utils/history';

export const setToken = createAction(SET_TOKEN);
export const setUsername = createAction(SET_USERNAME);
export const setLoading = createAction(SET_LOADING);
export const setIsLoggedIn = createAction(SET_IS_LOGGED_IN);
export const setError = createAction(SET_ERROR);
export const clearError = createAction(CLEAR_ERROR);


export const setUserState = () => (dispatch) => {
  dispatch(authRequest());
  getUserState()
    .then(json => {
      dispatch(setUsername(json.username));
      dispatch(setIsLoggedIn(true));
      dispatch(setLoading(false));
    }).catch(error=>{
      console.error(error);
      dispatch(authError(error));
    });

}

export const logIn = ({username, password, path='/'}) => (dispatch) => {
  dispatch(authRequest());
  loginUser({username, password})
  .then(json => {
    dispatch(
      authSuccess({
          token: json.token,
          username: json.user.username
      })
    );
    history.push(path);
  }).catch(error=>{
    console.error(error);
    dispatch(setLoading(false));
  });
};

export const register = ({username, password}) => dispatch => {
  dispatch(setLoading(true));
  signupUser({username, password})
    .then(json => {
      dispatch(
        authSuccess({
            token: json.token,
            username: json.user.username
        })
      );
    }).catch(error=>{
      console.error(error);
      dispatch(setLoading(false));
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
}

export const authSuccess = ({username, token}) => (dispatch) => {
  dispatch(setLoading(false));
  dispatch(setIsLoggedIn(true));
  dispatch(setUsername(username));
  dispatch(setToken(token));
  localStorage.setItem('token', token);
}

export const authError = error => (dispatch) => {
  dispatch(setLoading(false));
  dispatch(logOut());
  dispatch(setError(error));
}