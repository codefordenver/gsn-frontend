import { SET_ALL_PROGRAMS, SET_PROGRAM_DETAILS } from './ProgramActions';

const initialState = {
  programs: [],
  program: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PROGRAMS:
      return { ...state, programs: payload };
    case SET_PROGRAM_DETAILS:
      return { ...state, program: payload };
    default:
      return state;
  }
};
