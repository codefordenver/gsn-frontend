import React, { useState } from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { ChevronRightOutlined, ChevronDownOutlined } from 'components/Icons';
import NoteEntryComponent, {
  CreateButton
} from 'components/sharedStyles/ManageData/Note';
import ReferralEntryComponent from 'components/sharedStyles/ManageData/Referral';

function CreateTableHeader(props) {
  const { haveReferralButtonBool, haveNoteButtonBool, buttonText } = props;
  const [hiddenTable, setHiddenTable] = useState(true);
  const [haveCreateButton, setHaveCreateButton] = useState(false);
  function ChangeHiddenTable() {
    setHiddenTable(!hiddenTable);
  }
  function ChangeButton() {
    setHaveCreateButton(!haveCreateButton);
  }

  let noteEntryComponent = null;
  let referralEntryComponent = null;
  let button = null;

  const setButtonText = type =>
    type ? <CreateButton text="Cancel" /> : <CreateButton text={buttonText} />;

  if (haveNoteButtonBool) {
    noteEntryComponent = haveCreateButton && (
      <NoteEntryComponent {...props} callback={ChangeButton} />
    );
    button = setButtonText(haveCreateButton);
  }

  if (haveReferralButtonBool) {
    referralEntryComponent = haveCreateButton && (
      <ReferralEntryComponent {...props} callback={ChangeButton} />
    );
    button = setButtonText(haveCreateButton);
  }

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
      {noteEntryComponent}
      {referralEntryComponent}
      {table}
    </div>
  );
}

// <View style={{ flexDirection:"row" }}></View>
export default CreateTableHeader;
