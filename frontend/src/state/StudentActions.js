import fetch from 'isomorphic-fetch';
import { createAction } from 'utils/actionUtils';
import * as types from './StudentConstants';

export const setLoading = createAction(types.SET_LOADING);

const getStudents = students => ({
  type: types.SET_STUDENTS,
  payload: students
});

const getStudent = student => ({
  type: types.SET_STUDENT,
  payload: student
});

export const fetchStudents = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/${accessLevel}/student/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(allStudents => {
        dispatch(getStudents(allStudents));
      })
      .catch(error => error);
  };
};

export const fetchStudent = ({ accessLevel, studentId }) => {
  return dispatch => {
    return fetch(
      `http://gsndev.com/gsndb/${accessLevel}/student/${studentId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `JWT ${localStorage.token}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(student => {
        dispatch(getStudent(student['0']));
      })
      .catch(error => error);
  };
};

export const postStudentNotes = ({ text, accessLevel, url, callback }) => {
  console.log(url);
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb${url}/`, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(getStudent(s['0']));
        callback();
      })
      .catch(error => error);
  };
};

export const postStudentReferrals = ({ field, callback }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/all/referral/`, {
      method: 'POST',
      body: JSON.stringify(field),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(getStudent(s['0']));
        callback();
      })
      .catch(error => error);
  };
};
