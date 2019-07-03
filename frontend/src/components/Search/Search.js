import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function SearchBar(props) {
  return (
    <>
      <TextField
        name="searchInput"
        label="Search box"
        variant="outlined"
        required="true"
        onChange={props.action}
      />
    </>
  );
}

SearchBar.propTypes = {
  action: PropTypes.object
};

export default SearchBar;
