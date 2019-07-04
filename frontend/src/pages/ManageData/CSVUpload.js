import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  withStyles,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";

import { postCSVUpload } from "../../state/UserActions";
import {
  fetchDistrictDetails,
  fetchCreatableDistricts
} from "../../state/DistrictActions";
import { fetchSchools } from "../../state/SchoolActions";

function CSVUpload(props) {
  const {
    classes: { header }
  } = props;
  const dispatch = useDispatch();

  const defaultState = {
    selectedDistrict: "",
    selectedSchool: "",
    selectedFinal: "",
    csvFileName: "",
    csv: ""
  };

  const [openDialogue, setOpenDialogue] = useState(false);
  const [field, setField] = useState(defaultState);

  const updateState = event => {
    const { name, value, files } = event.target;
    if (name !== "csvFileName") {
      setField({ ...field, [name]: value });
    } else {
      setField({ ...field, [name]: value, csv: files[0] });
    }
  };

  const districts = useSelector(state => state.districts.districts);

  const schoolOptions =
    districts.filter(districtData => {
      return districtData.districtId === field.selectedDistrict;
    }) || [];

  const schoolOptionsData =
    schoolOptions[0] && schoolOptions[0].schoolSet
      ? schoolOptions[0].schoolSet
      : null;

  useEffect(() => {
    dispatch(fetchCreatableDistricts({ accessLevel: "all" }));
  }, [dispatch]);

  if (!districts) {
    return loadingJSX("Upload Data");
  }

  function handleOpenDialogue() {
    setOpenDialogue(true);
  }

  function handleCloseDialogue() {
    setOpenDialogue(false);
  }

  function handleFileUpload() {
    console.log(field);
    const data = { field };
    dispatch(postCSVUpload(data));
    handleCloseDialogue();

    // Can set field to default state once the file is uploaded.
    // setField(defaultState);
  }

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Upload Data
      </Typography>
      <p>District</p>
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
      <p>School</p>
      <Select
        label="School"
        variant="outlined"
        placeholder="School"
        required="true"
        name="selectedSchool"
        value={field.selectedSchool}
        onChange={updateState}
        disabled={field.selectedDistrict == ""}
      >
        {schoolOptionsData &&
          schoolOptionsData.map(school => {
            return (
              <MenuItem value={school.schoolId}>{school.schoolName}</MenuItem>
            );
          })}
      </Select>
      <p>Final</p>
      <Select
        label="Final"
        variant="outlined"
        placeholder="Final"
        required="true"
        name="selectedFinal"
        value={field.selectedFinal}
        onChange={updateState}
        disabled={field.selectedSchool == ""}
      >
        <MenuItem value>Final</MenuItem>
        <MenuItem value={false}>Not Final</MenuItem>
      </Select>
      <p>File</p>
      <input
        label="File"
        type="file"
        required="true"
        name="csvFileName"
        value={field.csvFileName}
        onChange={updateState}
      />
      <p />
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={handleOpenDialogue}
      >
        Submit
      </Button>
      <Dialog
        open={openDialogue}
        onClose={handleCloseDialogue}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Upload</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to upload this data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFileUpload} color="primary">
            Yes
          </Button>
          <Button onClick={handleCloseDialogue} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default withStyles(TablePageStyles)(CSVUpload);