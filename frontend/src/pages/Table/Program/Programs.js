import React, { useEffect, useState } from 'react';
import { getPrograms } from 'services/programServices';
import PropTypes from 'prop-types';

import { withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateProgramTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { Typography } from '@material-ui/core';




function Programs(props) {
  const my_or_all = props.my_or_all;
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrograms().then((s) => {
      setPrograms(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Programs'));
  }


  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        className={header}>
        All Programs
        </Typography>
    < CreateProgramTable 
      header = {header} 
      tHead = {tHead} 
      data = {programs} 
      tRow = {tRow} 
      striped = {striped} 
      my_or_all_link = {my_or_all}/>
    </div>
  );
}


Programs.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Programs);
