import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentAttendanceDetail } from 'services/studentServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateAttendanceTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function StudentAttendanceDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [studentAttendanceDetail, setStudentAttendanceDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentAttendanceDetail().then((s) => {
      setStudentAttendanceDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('Student Attendance Detail'));
  }

  const {
    studentName,
    
  } = studentAttendanceDetail;

  return (
    < CreateAttendanceTable header = {header} title = {studentName} 
    tHead = {tHead} data = {studentAttendanceDetail.attendanceSet} tRow = {tRow} 
    striped = {striped} />
);
}




StudentAttendanceDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(StudentAttendanceDetail);
