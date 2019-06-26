import { SET_ALL_SCHOOLS, SET_SCHOOL_DETAILS } from './SchoolActions';

const initialState = {
  schools: [],
  school: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_SCHOOLS:
      return { ...state, schools: payload };
    case SET_SCHOOL_DETAILS:
      return { ...state, school: payload };
    default:
      return state;
  }
};
