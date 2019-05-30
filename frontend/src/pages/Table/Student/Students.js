import React, { useEffect, useState } from 'react';
import { getStudents } from 'services/studentServices';
import PropTypes from 'prop-types';

import {
  withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';


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
      <CreateTableHeader
          headerClassStyle = {header}
          title = "All Students" />
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
