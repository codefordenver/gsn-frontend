import React from 'react';
import { Typography, InputBase, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

function CsvUpload(props) {
  const {
    classes: input,
    loading,
    header,
    CSVEndpoint
  } = props;

  const csrv_token = useSelector(state => state.user.token);

  const schools = ['trivial'];
  let selectedSchool = schools[0];

  const getSchoolOptions = function() {
    return (
      schools.map((school, schoolN) => {
        return (
          <option key={schoolN} value={school}>{school}</option>
        )
      })
    )
  }

  const setSelectedSchool = function(e) {
    selectedSchool = schools[indexOf(e.target.value)];
  }

  if (!csrv_token) {
    return (
      <div>Token required</div>
    )
  }

  return (
    <div>
      <Typography
            className={header}
            variant="h1"
            gutterBottom
      >
        Upload CSV
      </Typography>
      <label className="school-select-label" htmlFor="school-select">School</label>
        <select id="school-select"
          value={selectedSchool}
          onChange={setSelectedSchool}>
          {this.getSchoolOptions()}
        </select>
      <form method="post" 
        enctype="multipart/form-data"
        action={CSVEndpoint}>
        {csrf_token}       
        <InputBase className={input}
          type="file"
          name="mycsv"
          disabled={loading} /> 
        <Button type="submit"
          color="secondary"
          disabled={loading}>Upload</Button>
      </form>   
    </div>  
  )
}

export default CsvUpload;