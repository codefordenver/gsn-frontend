import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getCourseAttendanceDetail } from 'services/courseServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateAttendanceTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function CourseAttendanceDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [courseAttendanceDetail, setCourseAttendanceDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourseAttendanceDetail().then((s) => {
      setCourseAttendanceDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Course Attendance Detail'));
  }

  const {
      courseId,
      courseName,
  } = courseAttendanceDetail;

  return (
      < CreateAttendanceTable header = {header} title = {courseName} 
      tHead = {tHead} data = {courseAttendanceDetail.AttendanceSet} tRow = {tRow} 
      striped = {striped} type = 'Attendance' />
  );
}



CourseAttendanceDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(CourseAttendanceDetail);
