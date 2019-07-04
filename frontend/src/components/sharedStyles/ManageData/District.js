import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

function DistrictEntryComponent(props) {
  const { action, callback } = props;
  const dispatch = useDispatch();

  //! 1. Need program to be sent as part of student details
  //! 2. Need referral to send back student data based on ID
  //! 3. Need to setup form validation
  //! 4. Referral table needs to be populated based on returned student data
  const [field, setField] = useState({
    district_name: '',
    city: '',
    state: '',
    code: ''
  });

  const updateState = event => {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  const postTextFromState = () => {
    //! Add Validation here to make sure all fields have data
    dispatch(action({ field, callback }));
  };

  return (
    <>
       <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="District name"
        label="District Name"
        required="true"
        name="district_name"
        value={field.district_name}
        onChange={updateState}
      />
      <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="City"
        label="City"
        required="true"
        name="city"
        value={field.city}
        onChange={updateState}
      />
      <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="State"
        label="State"
        required="true"
        name="state"
        value={field.state}
        onChange={updateState}
      />
      <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="Code"
        label="Code"
        required="true"
        name="code"
        value={field.code}
        onChange={updateState}
      />

      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={postTextFromState}
      >
        Save
      </Button>
    </>
  );
}

DistrictEntryComponent.propTypes = {
  action: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired
};

export default DistrictEntryComponent;
