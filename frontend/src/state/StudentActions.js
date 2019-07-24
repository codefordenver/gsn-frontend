import fetch from 'isomorphic-fetch';
import { createAction } from 'utils/actionUtils';
import * as types from './StudentConstants';
import API_ROOT from '../services/request';

export const setLoading = createAction(types.SET_LOADING);

const getStudents = students => ({
  type: types.SET_STUDENTS,
  payload: students
});

const getStudent = student => ({
  type: types.SET_STUDENT,
  payload: student
});

const getOtherStudents = otherStudents => ({
  type: types.SET_OTHER_STUDENTS,
  payload: otherStudents
});


export const fetchStudents = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`${API_ROOT}/gsndb/${accessLevel}/student/`, {
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

export const fetchOtherStudents = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`https://gsndev.com/gsndb/${accessLevel}/student/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(allStudents => {
        dispatch(getOtherStudents(allStudents));
      })
      .catch(error => error);
  };
};

export const fetchStudent = ({ accessLevel, studentId }) => {
  return dispatch => {
    return fetch(`${API_ROOT}/gsndb/${accessLevel}/student/${studentId}`, {
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
    return fetch(`${API_ROOT}/gsndb${url}/`, {
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
    return fetch(`${API_ROOT}/gsndb/all/referral/`, {
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

export const postMyStudentList = ({ JSONData }) => {
  return dispatch => {
    return fetch(`https://gsndev.com/gsndb/my/modify-my-students/`, {
      method: 'POST',
      body: JSONData,
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
        dispatch(getOtherStudents(s['notmyStudents']));
        dispatch(getStudents(s['myStudents']));
      })
      .catch(error => error);
  };
};

export const postNotMyStudentList = ({ JSONData }) => {
  return dispatch => {
    return fetch(`https://gsndev.com/gsndb/my/modify-my-students/`, {
      method: 'POST',
      body: JSONData,
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
        dispatch(getOtherStudents(s['notmyStudents']));
        dispatch(getStudents(s['myStudents']));
      })
      .catch(error => error);
  };
};
