import * as types from './StudentConstants';

export const initialState = ({
  students: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_STUDENTS:
      return { ...state, students: action.students };

    case types.GET_STUDENT:
      return action.student;

    default:
      return state;
  }
};
