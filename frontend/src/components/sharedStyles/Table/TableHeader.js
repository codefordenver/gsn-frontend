import React, { useState } from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { ChevronRightOutlined, ChevronDownOutlined } from 'components/Icons';
import EntryComponent, {
  CreateButton
} from 'components/sharedStyles/ManageData/Note';

function CreateTableHeader(props) {
  const [hiddenTable, setHiddenTable] = useState(true);
  const [haveCreateButton, setHaveCreateButton] = useState(false);
  function ChangeHiddenTable() {
    setHiddenTable(!hiddenTable);
  }
  function ChangeButton() {
    setHaveCreateButton(!haveCreateButton);
  }
  const entryComponent = props.haveCreateSaveButtonBool ? (
    haveCreateButton ? (
      <EntryComponent {...props} />
    ) : null
  ) : null;
  const button = props.haveCreateSaveButtonBool ? (
    haveCreateButton ? (
      <CreateButton text="Cancel" />
    ) : (
      <CreateButton text="New" />
    )
  ) : null;
  const table = hiddenTable ? null : props.table;
  const icon = hiddenTable ? <ChevronRightOutlined /> : <ChevronDownOutlined />;

  return (
    <div>
      <Grid container spacing="auto" alignItems="center" justify="left">
        <Button variant="text" style={{ textAlign: 'left' }}>
          <Typography
            className={props.headerClassStyle}
            onClick={ChangeHiddenTable}
          >
            {icon}
            {props.title}
          </Typography>
        </Button>
        <Typography onClick={ChangeButton}>{button}</Typography>
      </Grid>
      {entryComponent}
      {table}
    </div>
  );
}

// <View style={{ flexDirection:"row" }}></View>
export default CreateTableHeader;
