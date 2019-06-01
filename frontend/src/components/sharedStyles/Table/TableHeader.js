import React, { useState } from 'react';
import {
    Typography, 
  } from '@material-ui/core';


function CreateTableHeader(props) {
  const [hiddenTable, setHiddenTable] = useState(true);
  function ChangeHiddenTable() {
    setHiddenTable(!hiddenTable) ;
  }
  /*
  <Typography
          variant="h4"
          component="h1"
          className={props.headerClassStyle}
          onClick={ChangeHiddenTable}
          >{props.title}
          </Typography>
          {table}
          */
  const table = hiddenTable ? null : props.table;
    return(
      <div>
        <div onClick={ChangeHiddenTable}
          >{props.title}
        </div>
        {table}
      </div>
        
    );
}

export default CreateTableHeader;