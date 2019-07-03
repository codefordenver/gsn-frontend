import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import SearchBar from '../../components/Search/Search';
import SearchResults from '../../components/Search/SearchResults';

function SearchPage(props) {
  const {
    classes: { header }
  } = props;

  const [field, setField] = useState({
    searchInput: '',
    showResults: false
  });

  const updateState = event => {
    console.log('state was updated');
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        Search
      </Typography>
      <SearchBar action={updateState} />
      <br />
      <SearchResults searchTerm={field.searchInput} />
    </div>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(SearchPage);
