import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentCourseDetail } from 'services/studentServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function StudentCourseDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [studentCourseDetail, setStudentCourseDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentCourseDetail().then((s) => {
      setStudentCourseDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('Student Course Detail'));
  }

  const {
    courseName,
    
  } = studentCourseDetail;

  return (
    < CreateCourseTable header = {header} title = {courseName} 
    tHead = {tHead} data = {studentCourseDetail.CourseSet} tRow = {tRow} 
    striped = {striped} />
);
}




StudentCourseDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(StudentCourseDetail);
