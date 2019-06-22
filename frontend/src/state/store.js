import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import user from 'state/UserReducer';
import studentReducer from './studentReducer';
import programReudcer from './ProgramReducer';

const store = createStore(
  combineReducers({
    user,
    students: studentReducer,
    programs: programReudcer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

// Hydrate the authToken from localStorage if it exist

export default store;
