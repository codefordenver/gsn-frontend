import fetch from 'isomorphic-fetch';
import { createAction } from 'utils/actionUtils';
import * as types from './StudentConstants';
// import { authRequest } from './UserActions';
// import { requestStudents } from '../services/studentServices';

export const setLoading = createAction(types.SET_LOADING);

const getStudents = students => ({
  type: types.SET_STUDENTS,
  payload: students,
});

const getStudent = student => ({
  type: types.SET_STUDENT,
  payload: student,
});

// export const fetchStudents = () => (dispatch) => {
//   dispatch(authRequest());
//   requestStudents()
//     .then((json) => {
//       dispatch(
//         studentSuccess(),
//       );
//     });
// };

export const fetchStudents = dispatch => fetch('http://gsndev.com/gsndb/student/', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `JWT ${localStorage.token}`,
  },
})
  .then(response => response.json())
  .then((students) => {
    dispatch(getStudents(students));
  })
  .catch(error => (error));


export const getStudentDetail = () => fetch('/mockdata/studentDetail.json')
  .then(result => result.json());

// export const studentSuccess = students => (dispatch) => {
//   console.log('studentSuccess was hit');
//   dispatch(setLoading(false));
//   dispatch(getStudents(students));
// };
