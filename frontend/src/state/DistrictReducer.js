import { SET_ALL_DISTRICTS, SET_DISTRICT_DETAILS } from './DistrictActions';

const initialState = {
  courses: [],
  course: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_DISTRICTS:
      return { ...state, districts: payload };
    case SET_DISTRICT_DETAILS:
      return { ...state, district: payload };
    default:
      return state;
  }
};
