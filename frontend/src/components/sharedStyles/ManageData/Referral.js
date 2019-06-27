import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function ReferralEntryComponent(props) {
    let newDate = new Date()
    let date = newDate.getDate();

    return(
  <TextField
    type="date"
    defaultValue={date}
  />
  <br/>
  <Select 
    label="Referral Type"
    variant="outlined"
    placeholder="Referral Type"
    required="true">
      <MenuItem value="MTL">Mental Health</MenuItem>
      <MenuItem value="DAC">Drug and Alcohol/Addictions Counseling</MenuItem>
      <MenuItem value="DHS">Social Services (Department of Human Services)</MenuItem>
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
  />
  <TextField
    fullWidth="true"
    variant="outlined"
    placeholder="Referral address"
    label="Referral Address"
    required="true"
  />
  <TextField
    type="number"
    fullWidth="true"
    variant="outlined"
    placeholder="Referral phone number"
    label="Referral Phone"
    required="true"
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
  />
    );
}



export default ReferralEntryComponent;
