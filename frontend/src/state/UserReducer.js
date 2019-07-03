import { fromJS } from 'immutable';
import {
  SET_TOKEN,
  SET_USERNAME,
  SET_LOADING,
  SET_IS_LOGGED_IN,
  SET_ERROR,
  CLEAR_ERROR,
  UPLOAD_CSV
} from './UserConstants';

const initialState = fromJS({
  token: null,
  isLoggedIn: false,
  username: null,
  loading: true,
  error: null
});

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOKEN:
      return state.set('authToken', payload);

    case SET_USERNAME:
      return state.set('username', payload);

    case SET_LOADING:
      return state.set('loading', payload);

    case SET_IS_LOGGED_IN:
      return state.set('isLoggedIn', payload);

    case SET_ERROR:
      return state.set('error', payload);

    case CLEAR_ERROR:
      return state.delete('error');

    case UPLOAD_CSV:
      return state.set('csv', payload);

    default:
      return state;
  }
}
