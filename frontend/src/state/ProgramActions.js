import fetch from 'isomorphic-fetch';

export const SET_ALL_PROGRAMS = 'GET_ALL_PROGRAMS';
export const SET_PROGRAM_DETAILS = 'GET_PROGRAM_DETAILS';

const setPrograms = data => ({
  type: SET_ALL_PROGRAMS,
  payload: data
});

const setProgramDetails = data => ({
  type: SET_PROGRAM_DETAILS,
  payload: data
});

export const fetchPrograms = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/${accessLevel}/program/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(s => {
        dispatch(setPrograms(s));
      })
      .catch(error => error);
  };
};

export const fetchProgramDetails = ({ accessLevel, programId }) => {
  return dispatch => {
    return fetch(
      `http://gsndev.com/gsndb/${accessLevel}/program/${programId}`,
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
      .then(s => {
        dispatch(setProgramDetails(s['0']));
      })
      .catch(error => error);
  };
};

export const postProgramNotes = ({ text, accessLevel, url }) => {
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
        dispatch(setProgramDetails(s['0']));
      })
      .catch(error => error);
  };
};
