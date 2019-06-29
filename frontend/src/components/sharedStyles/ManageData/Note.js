import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function Note(props) {
  const dispatch = useDispatch();
  const [fieldText, setFieldText] = useState('');
  const { action, url, accessLevel } = props;

  const updateTextState = event => {
    setFieldText(event.target.value);
  };

  const postTextFromState = () => {
    const data = { text: fieldText, url, accessLevel };
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
        placeholder="Write your note here"
        label="Note"
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

Note.propTypes = {
  action: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  accessLevel: PropTypes.string.isRequired
};

CreateButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default Note;
export { CreateButton };
