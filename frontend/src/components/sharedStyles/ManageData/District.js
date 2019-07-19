import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <Select
        label="state"
        variant="outlined"
        placeholder="State"
        required="true"
        name="state"
        value={field.state}
        onChange={updateState}
      >
        <MenuItem value="AL">AL</MenuItem>
        <MenuItem value="AK">AK</MenuItem>
        <MenuItem value="AZ">AZ</MenuItem>
        <MenuItem value="AR">AR</MenuItem>
        <MenuItem value="CA">CA</MenuItem>
        <MenuItem value="CO">CO</MenuItem>
        <MenuItem value="CT">CT</MenuItem>
        <MenuItem value="DE">DE</MenuItem>
        <MenuItem value="FL">FL</MenuItem>
        <MenuItem value="GA">GA</MenuItem>
        <MenuItem value="HI">HI</MenuItem>
        <MenuItem value="ID">ID</MenuItem>
        <MenuItem value="IL">IL</MenuItem>
        <MenuItem value="IN">IN</MenuItem>
        <MenuItem value="IA">IA</MenuItem>
        <MenuItem value="KS">KS</MenuItem>
        <MenuItem value="KY">KY</MenuItem>
        <MenuItem value="LA">LA</MenuItem>
        <MenuItem value="ME">ME</MenuItem>
        <MenuItem value="MD">MD</MenuItem>
        <MenuItem value="MA">MA</MenuItem>
        <MenuItem value="MI">MI</MenuItem>
        <MenuItem value="MN">MN</MenuItem>
        <MenuItem value="MS">MS</MenuItem>
        <MenuItem value="MO">MO</MenuItem>
        <MenuItem value="MT">MT</MenuItem>
        <MenuItem value="NE">NE</MenuItem>
        <MenuItem value="NV">NV</MenuItem>
        <MenuItem value="NH">NH</MenuItem>
        <MenuItem value="NJ">NJ</MenuItem>
        <MenuItem value="NM">NM</MenuItem>
        <MenuItem value="NY">NY</MenuItem>
        <MenuItem value="NC">NC</MenuItem>
        <MenuItem value="ND">ND</MenuItem>
        <MenuItem value="OH">OH</MenuItem>
        <MenuItem value="OK">OK</MenuItem>
        <MenuItem value="OR">OR</MenuItem>
        <MenuItem value="PA">PA</MenuItem>
        <MenuItem value="RI">RI</MenuItem>
        <MenuItem value="SC">SC</MenuItem>
        <MenuItem value="SD">SD</MenuItem>
        <MenuItem value="TN">TN</MenuItem>
        <MenuItem value="TX">TX</MenuItem>
        <MenuItem value="UT">UT</MenuItem>
        <MenuItem value="VT">VT</MenuItem>
        <MenuItem value="VA">VA</MenuItem>
        <MenuItem value="WA">WA</MenuItem>
        <MenuItem value="WV">WV</MenuItem>
        <MenuItem value="WI">WI</MenuItem>
        <MenuItem value="WY">WY</MenuItem>
      </Select>
      <TextField
        fullWidth="true"
        variant="outlined"
        placeholder="Code"
        label="Code"
        required="true"
        name="code"
        inputProps={{
        maxlength: 10
        }}
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
