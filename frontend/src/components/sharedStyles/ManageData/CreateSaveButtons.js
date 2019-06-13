
import React, { useState }  from 'react';
import { Button, Typography, TextField } from '@material-ui/core';

function EntryComponent() {
    return(
        <div>
            <TextField 
                fullWidth="true"
                variant="outlined"
                placeholder="Title"
                required="true"
                color="primary"/>
            <TextField 
                multiline="true"
                rows="6"
                rowsMax="6"
                fullWidth="true"
                variant="outlined"
                placeholder="Content"
                required="true"/>
        </div>
    );
}

function CreateButton() {
    return(
        <div>
            <Button 
                size="small"
                variant="contained"
                color="primary">
                New
            </Button>     
        </div>
    );
}

function SaveButton() {
    return(
        <div>
            <Button 
                size="small"
                variant="contained"
                color="secondary">
                Save
            </Button> 

        </div>
    );
}


export { CreateButton, SaveButton, EntryComponent }