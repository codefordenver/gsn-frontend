import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import user from 'state/UserReducer';
import studentReducer from './studentReducer';
import programReducer from './ProgramReducer';
import courseReducer from './CourseReducer';
import districtReducer from './DistrictReducer';
import schoolReducer from './SchoolReducer';

const store = createStore(
  combineReducers({
    user,
    students: studentReducer,
    programs: programReducer,
    courses: courseReducer,
    districts: districtReducer,
    schools: schoolReducer
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
