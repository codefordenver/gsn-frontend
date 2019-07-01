import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, withStyles, Select, MenuItem } from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import {
  fetchDistrictDetails,
  fetchCreatableDistricts
} from '../../state/DistrictActions';

function CSVUpload(props) {
  const {
    classes: { header }
  } = props;
  const dispatch = useDispatch();

  const [field, setField] = useState({
    selectedDistrict: "",
    selectedSchool: ""
  });

  const updateState = event => {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  // Props are provided by React Router
  const districtId = 1;

  // Redux Hooks
  const districts = useSelector(state => state.districts.districts);
  const districtDetail = useSelector(state => state.districts.district);

  // React Hook to fetch DistrictDetail data
  useEffect(() => {
    dispatch(fetchCreatableDistricts({ accessLevel: "all" }));
  }, [dispatch, districtId]);

  useEffect(() => {
    dispatch(fetchDistrictDetails({ accessLevel: "all", districtId }));
  }, [dispatch, districtId]);

  if (!districtDetail) {
    return loadingJSX("Upload Data");
  }

  const schoolSet = districtDetail.schoolSet || [];

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Upload Data
      </Typography>

      <Select
        label="District"
        variant="outlined"
        placeholder="District"
        required="true"
        name="selectedDistrict"
        value={field.selectedDistrict}
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
      <Select
        label="School"
        variant="outlined"
        placeholder="School"
        required="true"
        name="selectedSchool"
        value={field.selectedSchool}
        onChange={updateState}
      >
        {schoolSet.map(schoolData => {
          return (
            <MenuItem value={schoolData.schoolId}>
              {schoolData.schoolName}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}

export default withStyles(TablePageStyles)(CSVUpload);
