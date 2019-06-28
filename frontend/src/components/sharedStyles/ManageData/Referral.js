import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

function ReferralEntryComponent(props) {
  const { action, url, accessLevel, student, callback } = props;
  const dispatch = useDispatch();

  //! 1. Need program to be sent as part of student details
  //! 2. Need referral to send back student data based on ID
  //! 3. Need to setup form validation
  //! 4. Referral table needs to be populated based on returned student data
  const [field, setField] = useState({
    student: student.studentId,
    program: 1, //! need to get actual program number
    type: '',
    date_given: '',
    reference_name: '',
    reference_phone: '',
    reference_address: '',
    reason: ''
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
        type="date"
        name="date_given"
        value={field.date_given}
        onChange={updateState}
      />
      <br />
      <Select
        label="Referral Type"
        variant="outlined"
        placeholder="Referral Type"
        required="true"
        name="type"
        value={field.type}
        onChange={updateState}
      >
        <MenuItem value="MTL">Mental Health</MenuItem>
        <MenuItem value="DAC">Drug and Alcohol/Addictions Counseling</MenuItem>
        <MenuItem value="DHS">
          Social Services (Department of Human Services)
        </MenuItem>
        <MenuItem value="YSC">Division of Youth Services/Corrections</MenuItem>
        <MenuItem value="CPS">Childcare/Preschool Services</MenuItem>
        <MenuItem value="FMR">Family Resources</MenuItem>
        <MenuItem value="M/C">Meals/Clothing</MenuItem>
        <MenuItem value="HOU">Housing</MenuItem>
        <MenuItem value="SIP">Specialized School Intervention Program</MenuItem>
        <MenuItem value="TRN">Transportation</MenuItem>
        <MenuItem value="WFC">Work Force Center</MenuItem>
        <MenuItem value="IOG">Interagency Oversight Group (IOG)</MenuItem>
        <MenuItem value="OTH">Other</MenuItem>
      </Select>
      <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="Referral name"
        label="Referral Name"
        required="true"
        name="reference_name"
        value={field.reference_name}
        onChange={updateState}
      />
      <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="Referral address"
        label="Referral Address"
        required="true"
        name="reference_address"
        value={field.reference_address}
        onChange={updateState}
      />
      <TextField
        type="number"
        fullWidth="true"
        variant="outlined"
        placeholder="Referral phone number"
        label="Referral Phone"
        required="true"
        name="reference_phone"
        value={field.reference_phone}
        onChange={updateState}
      />
      <TextField
        multiline="true"
        rows="3"
        rowsMax="4"
        fullWidth="true"
        variant="outlined"
        placeholder="Enter reason here"
        label="Referral Reason"
        required="true"
        name="reason"
        value={field.reason}
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

ReferralEntryComponent.propTypes = {
  action: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  accessLevel: PropTypes.string.isRequired,
  student: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
};

export default ReferralEntryComponent;
