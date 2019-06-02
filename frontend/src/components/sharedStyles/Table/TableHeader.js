import React, { useState } from 'react';
import {
    Typography, 
  } from '@material-ui/core';
import { ChevronRightOutlined, ChevronDownOutlined } from 'components/Icons';


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

    /*

<div>
        <div onClick={ChangeHiddenTable}
          >{props.title} {"\n"}
        </div>
        {table}
    */
  const table = hiddenTable ? null : props.table;
  const icon = hiddenTable ? <ChevronRightOutlined/> : <ChevronDownOutlined/>;
    return(
      <div>
        <Typography
          className={props.headerClassStyle}
          onClick={ChangeHiddenTable}
          >{icon}{props.title}
          </Typography>
          {table}
      </div>
        
    );
}

export default CreateTableHeader;