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