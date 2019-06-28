import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function NoteEntryComponent(props) {
  const { action, url, accessLevel, callback } = props;
  const dispatch = useDispatch();
  const [fieldText, setFieldText] = useState('');

  const updateTextState = event => {
    setFieldText(event.target.value);
  };

  const postTextFromState = () => {
    const data = { text: fieldText, url, accessLevel, callback };
    dispatch(action(data));
  };

  return (
    <div>
      <TextField
        multiline="true"
        rows="6"
        rowsMax="6"
        fullWidth="true"
        variant="outlined"
        placeholder="Enter note here"
        required="true"
        value={fieldText}
        onChange={updateTextState}
      />

      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={postTextFromState}
      >
        Save
      </Button>
    </div>
  );
}

function CreateButton(props) {
  const { text } = props;
  return (
    <div>
      <Button size="small" variant="contained" color="primary">
        {text}
      </Button>
    </div>
  );
}

NoteEntryComponent.propTypes = {
  action: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  accessLevel: PropTypes.string.isRequired
};

CreateButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default NoteEntryComponent;
export { CreateButton };
