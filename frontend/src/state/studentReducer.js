import * as types from './StudentConstants';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_STUDENTS:
      return { ...state, students: action.students };

    case types.GET_STUDENT:
      return action.student;

    default:
      return state;
  }
};
