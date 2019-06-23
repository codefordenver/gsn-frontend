import { SET_ALL_COURSES, SET_COURSE_DETAILS } from './CourseActions';

const initialState = {
  courses: [],
  course: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_COURSES:
      return { ...state, courses: payload };
    case SET_COURSE_DETAILS:
      return { ...state, course: payload };
    default:
      return state;
  }
};
