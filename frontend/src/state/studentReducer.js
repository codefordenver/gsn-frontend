import * as types from './StudentConstants';

const initialState = ({
  students: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STUDENTS:
      return { ...state, students: action.payload };

    case types.SET_STUDENT:
      return action.student;

    default:
      return state;
  }
};
