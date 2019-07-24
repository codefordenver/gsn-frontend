import fetch from 'isomorphic-fetch';
import API_ROOT from '../services/request';

export const SET_ALL_COURSES = 'GET_ALL_COURSES';
export const SET_COURSE_DETAILS = 'GET_COURSE_DETAILS';

const setCourses = data => ({
  type: SET_ALL_COURSES,
  payload: data
});

const setCourseDetails = data => ({
  type: SET_COURSE_DETAILS,
  payload: data
});

export const fetchCourses = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`${API_ROOT}/gsndb/${accessLevel}/course/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(s => {
        dispatch(setCourses(s));
      })
      .catch(error => error);
  };
};

export const fetchCourseDetails = ({ accessLevel, courseId }) => {
  return dispatch => {
    return fetch(`${API_ROOT}/gsndb/${accessLevel}/course/${courseId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(setCourseDetails(s['0']));
      })
      .catch(error => error);
  };
};

export const postCourseNotes = ({ text, accessLevel, url }) => {
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
        dispatch(setCourseDetails(s['0']));
      })
      .catch(error => error);
  };
};
