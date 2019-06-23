import React, { useEffect, useState } from 'react';
import { getSchools } from 'services/schoolServices';
import PropTypes from 'prop-types';

import { withStyles, Select, MenuItem
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';


function CSVParser(props) {
  

  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchools().then((s) => {
      setSchools(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Schools'));
  }
  

  return (
    <div>
      <Select>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>

      </ Select>
    </div>

  );
}


CSVParser.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(CSVParser);
