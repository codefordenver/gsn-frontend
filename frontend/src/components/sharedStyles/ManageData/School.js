import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { fetchCreatableDistricts } from '../../../state/DistrictActions';

function SchoolEntryComponent(props) {
  const { action, callback } = props;
  const dispatch = useDispatch();

  //! 1. Need program to be sent as part of student details
  //! 2. Need referral to send back student data based on ID
  //! 3. Need to setup form validation
  //! 4. Referral table needs to be populated based on returned student data
  const [field, setField] = useState({
    district_id: "",
    school_name: ""
  });

  const districts = useSelector(state => state.districts.districts);

  useEffect(() => {
    dispatch(fetchCreatableDistricts({ accessLevel: "all" }));
  }, [dispatch]);

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
      <Select
        label="District"
        variant="outlined"
        placeholder="District"
        required="true"
        name="district_id"
        value={field.district_id}
        onChange={updateState}
      >
        {districts.map(districtData => {
          return (
            <MenuItem value={districtData.districtId}>
              {districtData.districtName}
            </MenuItem>
          );
        })}
      </Select>
      <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="School name"
        label="School Name"
        required="true"
        name="school_name"
        value={field.school_name}
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

SchoolEntryComponent.propTypes = {
  action: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired
};

export default SchoolEntryComponent;
