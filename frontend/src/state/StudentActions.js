import fetch from 'isomorphic-fetch';
import { createAction } from 'utils/actionUtils';
import * as types from './StudentConstants';

export const setLoading = createAction(types.SET_LOADING);

const getStudents = students => ({
  type: types.SET_STUDENTS,
  payload: students,
});

const getStudent = student => ({
  type: types.SET_STUDENT,
  payload: student,
});

export const fetchStudents = (students) => {
  return (dispatch) => {
    return fetch('http://gsndev.com/gsndb/student/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`,
      },
    })
      .then(response => response.json())
      .then((allStudents) => {
        dispatch(getStudents(allStudents));
      })
      .catch(error => (error));
  };
};


export const fetchStudent = (studentId) => {
  return (dispatch) => {
    return fetch(`http://gsndev.com/gsndb/student/${studentId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`,
      },
    })
      .then(response => response.json())
      .then((student) => {
        dispatch(getStudent(student));
      })
      .catch(error => (error));
  };
};
