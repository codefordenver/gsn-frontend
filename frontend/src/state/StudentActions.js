import fetch from 'isomorphic-fetch';
import * as types from './StudentConstants';

const getStudents = students => ({
  type: types.REQUEST_STUDENTS,
  payload: students,
});

const getStudent = student => ({
  type: types.GET_STUDENT,
  payload: student,
});

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
