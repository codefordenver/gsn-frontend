import React, { useEffect, useState } from 'react';
import { getSchools } from 'services/schoolServices';
import PropTypes from 'prop-types';

import { withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { Typography } from '@material-ui/core';



function Schools(props) {
  const my_or_all = props.my_or_all;
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

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
      <Typography
        variant="h4"
        component="h1"
        className={header}>
        All Schools
      </Typography>
      < CreateSchoolTable 
        header = {header} 
        tHead = {tHead} 
        data = {schools} 
        tRow = {tRow} 
        striped = {striped} 
        my_or_all_link = {my_or_all}/>
    </div>
  );
}


Schools.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Schools);
