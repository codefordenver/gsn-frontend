import * as types from './StudentConstants';

const initialState = ({
  students: [],
  student: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STUDENTS:
      return { ...state, students: action.payload };

    case types.SET_STUDENT:
      return { ...state, student: action.payload };

    default:
      return state;
  }
};
