import React, { useEffect, useState } from 'react';
import { getStudents } from 'services/studentServices';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import {
  withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';


function Students(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudents().then((s) => {
      setStudents(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Students'));
  }

  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        className={header}>
        My Students
      </Typography>
      < CreateStudentTable 
        header = {header}
        tHead = {tHead} 
        data = {students} 
        tRow = {tRow} 
        striped = {striped} />
    </div>
  );
}


Students.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Students);
