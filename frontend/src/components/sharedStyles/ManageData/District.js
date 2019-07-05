import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { fetchCreatableDistricts } from "../../../state/DistrictActions";

function DistrictEntryComponent(props) {
  const { action, callback } = props;
  const dispatch = useDispatch();

  const [field, setField] = useState({
    district_name: "",
    city: "",
    state: "",
    code: ""
  });

  const updateState = event => {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  const postTextFromState = () => {
    dispatch(action({ field, callback }));
  };

  const updatePage = () => {
    postTextFromState();
    setField({
      ["district_name"]: "",
      ["city"]: "",
      ["state"]: "",
      ["code"]: ""
    });
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
        onClick={updatePage}
      >
        Create District
      </Button>
    </>
  );
}

DistrictEntryComponent.propTypes = {
  action: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired
};

function DistrictDeleteComponent(props) {
  const { action, callback } = props;
  const dispatch = useDispatch();
  const [field, setField] = useState({
    id: ""
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
    dispatch(action({ field, callback }));
  };

  return (
    <>
      <Select
        label="District"
        variant="outlined"
        placeholder="District"
        required="true"
        name="id"
        value={field.id}
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
      <br />
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={postTextFromState}
      >
        Delete District
      </Button>
    </>
  );
}

DistrictDeleteComponent.propTypes = {
  action: PropTypes.func.isRequired
};

export default DistrictEntryComponent;
export { DistrictDeleteComponent };
