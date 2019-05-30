import React from 'react';
import {
    Typography, 
  } from '@material-ui/core';


function CreateTableHeader(props) {
    return(
        <Typography
        variant="h4"
        component="h1"
        className={props.headerClassStyle}
        >{props.title}
        </Typography>
    );
}

export default CreateTableHeader;