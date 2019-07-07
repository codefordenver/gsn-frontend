import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  withStyles,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions
} from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { get } from 'immutable';
import { postCSVUpload, clearErrorCSV } from '../../state/UserActions';
import {
  fetchDistrictDetails,
  fetchCreatableDistricts
} from '../../state/DistrictActions';
import { fetchSchools } from '../../state/SchoolActions';

const style = {
  formControl: {
    minWidth: 200,
    marginTop: '1em'
  },
  fileInput: {
    display: 'none'
  },
  fileName: {
    display: 'inline',
    marginLeft: 10
  },
  button: {
    marginTop: '2em'
  }
};

const defaultState = {
  selectedDistrict: '',
  selectedSchool: '',
  selectedFinal: '',
  csvFileName: '',
  csv: ''
};

function CSVUpload(props) {
  const {
    classes: { header }
  } = props;
  const dispatch = useDispatch();

  const [openDialogue, setOpenDialogue] = useState(false);
  const [field, setField] = useState(defaultState);

  const updateState = event => {
    const { name, value, files } = event.target;
    if (name !== 'csvFileName') {
      setField({ ...field, [name]: value });
    } else {
      setField({ ...field, [name]: value, csv: files[0] });
    }
  };

  // Get CSV status from the redux store
  const user = useSelector(state => state.user);
  const csv = user.get('csv');
  let loading = false;
  let error = null;
  let file = null;
  if (csv) {
    loading = csv.get('loading');
    error = csv.get('error');
    file = csv.get('file');
  }

  // Get District information from the redux store
  useEffect(() => {
    dispatch(fetchCreatableDistricts({ accessLevel: 'all' }));
  }, [dispatch]);

  const districts = useSelector(state => state.districts.districts);
  const schoolOptions =
    districts.filter(districtData => {
      return districtData.districtId === field.selectedDistrict;
    }) || [];

  const schoolOptionsData =
    schoolOptions[0] && schoolOptions[0].schoolSet
      ? schoolOptions[0].schoolSet
      : null;

  if (!districts) {
    return loadingJSX('Upload Data');
  }

  function handleOpenDialogue() {
    setOpenDialogue(true);
  }

  function handleCloseDialogue() {
    setOpenDialogue(false);
  }

  function handleFileUpload() {
    const data = { field };
    dispatch(postCSVUpload(data));
    handleCloseDialogue();
  }

  function clearCSVError() {
    dispatch(clearErrorCSV());
  }

  if (loading) {
    return (
      <Typography className={header} component="h1" variant="h4">
        Uploading CSV Data...
      </Typography>
    );
  }

  if (error) {
    return (
      <>
        <Typography className={header} component="h1" variant="h4">
          Error uploading CSV data...
        </Typography>
        <Typography>{`The following error occured: ${error.message.toString()}`}</Typography>

        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={clearCSVError}
        >
          Try Again
        </Button>
      </>
    );
  }

  return (
    <>
      <Typography className={header} component="h1" variant="h4">
        Upload Data
      </Typography>
      <FormControl style={style.formControl}>
        <InputLabel htmlFor="district">District</InputLabel>
        <Select
          id="district"
          label="District"
          variant="outlined"
          placeholder="District"
          required="true"
          name="selectedDistrict"
          value={field.selectedDistrict}
          onChange={updateState}
          displayEmpty
        >
          {districts.map(districtData => {
            return (
              <MenuItem value={districtData.districtId}>
                {districtData.districtName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <div />

      <FormControl style={style.formControl}>
        <InputLabel htmlFor="school">School</InputLabel>
        <Select
          select
          id="school"
          label="School"
          variant="outlined"
          placeholder="School"
          required="true"
          name="selectedSchool"
          displayEmpty
          value={field.selectedSchool}
          onChange={updateState}
          disabled={field.selectedDistrict === ''}
        >
          {schoolOptionsData &&
            schoolOptionsData.map(school => {
              if (school.districtId === field.selectedDistrict)
                return (
                  <MenuItem value={school.schoolId}>
                    {school.schoolName}
                  </MenuItem>
                );
            })}
        </Select>
      </FormControl>
      <div />
      <FormControl style={style.formControl}>
        <InputLabel htmlFor="final">Final</InputLabel>
        <Select
          id="final"
          label="Final"
          variant="outlined"
          placeholder="Final"
          required="true"
          displayEmpty
          name="selectedFinal"
          value={field.selectedFinal}
          onChange={updateState}
          disabled={field.selectedSchool === ''}
        >
          <MenuItem value>Final</MenuItem>
          <MenuItem value={false}>Not Final</MenuItem>
        </Select>
      </FormControl>

      <div />
      <Typography style={style.button}>
        <label htmlFor="outlined-button-file">
          <Button
            component="span"
            size="small"
            variant="contained"
            color="secondary"
          >
            Upload File
          </Button>
        </label>
        <input
          accept="*"
          style={style.fileInput}
          id="outlined-button-file"
          multiple={false}
          type="file"
          name="csvFileName"
          required="true"
          label="File"
          onChange={updateState}
        />
        <div style={style.fileName}>
          {field.csv ? `Files uploaded: ${field.csv.name}` : `No file uploaded`}
        </div>
      </Typography>

      <div />

      <Button
        style={style.button}
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

CSVUpload.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(CSVUpload);
