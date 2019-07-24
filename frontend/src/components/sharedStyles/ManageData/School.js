import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { fetchCreatableDistricts } from '../../../state/DistrictActions';
import { fetchCreatableSchools } from '../../../state/SchoolActions';

function SchoolEntryComponent(props) {
  const { action, callback } = props;
  const dispatch = useDispatch();

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
    setField({
      ["district_id"]: "",
      ["school_name"]: ""
    });
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
        Create School
      </Button>
    </>
  );
}

SchoolEntryComponent.propTypes = {
  action: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired
};

function SchoolDeleteComponent(props) {
  const { action, callback } = props;
  const dispatch = useDispatch();

  const [field, setField] = useState({
    id: ""
  });

  const schools = useSelector(state => state.schools.schools);

  useEffect(() => {
    dispatch(fetchCreatableSchools({ accessLevel: "all" }));
  }, [dispatch]);

  const updateState = event => {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  const postTextFromState = () => {
    dispatch(action({ field, callback }));
  };

  return (
    <>
      <Select
        label="School"
        variant="outlined"
        placeholder="School"
        required="true"
        name="id"
        value={field.id}
        onChange={updateState}
      >
        {schools.map(schoolData => {
          return (
            <MenuItem value={schoolData.schoolId}>
              {schoolData.schoolName}
            </MenuItem>
          );
        })}
      </Select>
      <br />
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={postTextFromState}
      >
        Delete School
      </Button>
    </>
  );
}

SchoolDeleteComponent.propTypes = {
  action: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired
};


export default SchoolEntryComponent;
export { SchoolDeleteComponent };
