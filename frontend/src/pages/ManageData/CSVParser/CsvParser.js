import React, { useEffect, useState } from 'react';
import { getSchools } from 'services/schoolServices';
import PropTypes from 'prop-types';

import { withStyles,
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
    <div>Hello World!</div>

  );
}


Schools.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(CSVParser);
