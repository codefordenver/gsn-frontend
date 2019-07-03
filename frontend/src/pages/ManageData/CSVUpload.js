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
import {
  fetchDistrictDetails,
  fetchCreatableDistricts
} from "../../state/DistrictActions";

function CSVUpload(props) {
  const {
    classes: { header }
  } = props;
  const dispatch = useDispatch();
  const [openDialogue, setOpenDialogue] = useState(false);
  const [field, setField] = useState({
    selectedDistrict: "",
    selectedSchool: "",
    selectedFinal: ""
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

  if (!districts) {
    return loadingJSX("Upload Data");
  }

  function handleOpenDialogue() {
    setOpenDialogue(true);
  }

  function handleCloseDialogue() {
    setOpenDialogue(false);
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
        disabled={field.selectedDistrict == ""}
      >
        {schoolSet.map(schoolData => {
          return (
            <MenuItem value={schoolData.schoolId}>
              {schoolData.schoolName}
            </MenuItem>
          );
        })}
      </Select>
      <br />
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
        <MenuItem value={"True"}>Final</MenuItem>
        <MenuItem value={"False"}>Not Final</MenuItem>
      </Select>
      <br />
      <input type="file" />
      <br />
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
        <DialogTitle id="alert-dialog-title">{"Confirm Upload"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to upload this data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Yes</Button>
          <Button onClick={handleCloseDialogue} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default withStyles(TablePageStyles)(CSVUpload);
