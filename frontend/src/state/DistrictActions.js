import fetch from "isomorphic-fetch";

export const SET_ALL_DISTRICTS = "GET_ALL_DISTRICTS";
export const SET_DISTRICT_DETAILS = "GET_DISTRICT_DISTRICTS";

const setDistricts = data => ({
  type: SET_ALL_DISTRICTS,
  payload: data
});

const setDistrictDetails = data => ({
  type: SET_DISTRICT_DETAILS,
  payload: data
});

export const fetchDistricts = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/${accessLevel}/district/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(s => {
        dispatch(setDistricts(s));
      })
      .catch(error => error);
  };
};

export const fetchDistrictDetails = ({ accessLevel, districtId }) => {
  return dispatch => {
    return fetch(
      `http://gsndev.com/gsndb/${accessLevel}/district/${districtId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `JWT ${localStorage.token}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(s => {
        dispatch(setDistrictDetails(s["0"]));
      })
      .catch(error => error);
  };
};

export const postDistrictNotes = ({ text, accessLevel, url }) => {
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
        dispatch(setDistrictDetails(s["0"]));
      })
      .catch(error => error);
  };
};

export const fetchCreatableDistricts = ({ accessLevel }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/all/create-district/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(s => {
        dispatch(setDistricts(s));
      })
      .catch(error => error);
  };
};

export const postDistricts = ({ field }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/all/create-district/`, {
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
        dispatch(setDistricts(s));
      })
      .catch(error => error);
  };
};

export const deleteDistricts = ({ field }) => {
  return dispatch => {
    return fetch(`http://gsndev.com/gsndb/all/create-district/`, {
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
        dispatch(setDistricts(s));
      })
      .catch(error => error);
  };
};
