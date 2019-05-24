import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getCourseStudentDetail } from 'services/courseServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function CourseStudentDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [courseStudentDetail, setCourseStudentDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourseStudentDetail().then((s) => {
      setCourseStudentDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Course Student Detail'));
  }

  const {
      courseId,
      courseName,
  } = courseStudentDetail;


  return (
    < CreateStudentTable header = {header} title = {courseName}
    tHead = {tHead} data = {courseStudentDetail.studentSet} tRow = {tRow} 
    striped = {striped} />
  
   );
          }



CourseStudentDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(CourseStudentDetail);