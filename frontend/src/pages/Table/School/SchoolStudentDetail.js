import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getSchoolStudentDetail } from 'services/schoolServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function SchoolStudentDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [schoolStudentDetail, setSchoolStudentDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchoolStudentDetail().then((s) => {
      setSchoolStudentDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('School Student Detail'));
  }

  const {
      schoolId,
      schoolName,
  } = schoolStudentDetail;

  return (
    < CreateStudentTable header = {header} title = {schoolName}
    tHead = {tHead} data = {schoolStudentDetail.studentSet} tRow = {tRow} 
    striped = {striped} />
);
}



SchoolStudentDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(SchoolStudentDetail);
