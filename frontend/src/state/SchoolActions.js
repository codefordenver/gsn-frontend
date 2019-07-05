import fetch from "isomorphic-fetch";

export const SET_ALL_SCHOOLS = "GET_ALL_SCHOOLS";
export const SET_SCHOOL_DETAILS = "SET_SCHOOL_DETAILS";

const setSchools = data => ({
  type: SET_ALL_SCHOOLS,
  payload: data
});

const setSchoolDetails = data => ({
  type: SET_SCHOOL_DETAILS,
  payload: data
});

export const fetchSchools = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/${accessLevel}/school/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(s => {
        dispatch(setSchools(s));
      })
      .catch(error => error);
  };
};

export const fetchSchoolDetails = ({ accessLevel, schoolId }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/${accessLevel}/school/${schoolId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(setSchoolDetails(s["0"]));
      })
      .catch(error => error);
  };
};

export const postSchoolNotes = ({ text, accessLevel, url }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb${url}/`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(setSchoolDetails(s["0"]));
      })
      .catch(error => error);
  };
};

export const fetchCreatableSchools = () => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/all/create-school/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(s => {
        dispatch(setSchools(s));
      })
      .catch(error => error);
  };
};

export const postSchools = ({ field, callback }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/all/create-school/`, {
      method: "POST",
      body: JSON.stringify(field),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(setSchools(s));
      })
      .catch(error => error);
  };
};

export const deleteSchools = ({ field, callback }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/all/create-school/`, {
      method: "DELETE",
      body: JSON.stringify(field),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(setSchools(s));
      })
      .catch(error => error);
  };
};
