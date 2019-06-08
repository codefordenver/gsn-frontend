import React, { useState }  from 'react';
import {
    Button, Typography
  } from '@material-ui/core';

function CreateButton() {
    return(
        <Button 
            size="small"
            variant="contained"
            color="primary">
            + New
        </Button> 
    );
}

function SaveButton() {
    return(
        <Button 
            size="small"
            variant="contained"
            color="secondary">
            Save
        </Button> 
    );
}

function CreateSaveButton(props) {
    const [saveNew, setSaveNew] = useState(false);
    function ChangeButton() {
        setSaveNew(!saveNew);
    }

    const button = saveNew ? <SaveButton /> : <CreateButton />

    return(
        <Typography onClick={ ChangeButton }>
            { button }
        </Typography>
    );
}


export { CreateSaveButton }