import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getCourseGradeDetail } from 'services/courseServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function CourseGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [courseGradeDetail, setCourseGradeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourseGradeDetail().then((s) => {
      setCourseGradeDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Course Grade Detail'));
  }

  const {
      courseId,
      courseName,
  } = courseGradeDetail;

  return (
      < CreateGradeTable header = {header} title = {courseName} 
      tHead = {tHead} data = {courseGradeDetail.gradeSet} tRow = {tRow} 
      striped = {striped} type = 'grade' />
  );
}



CourseGradeDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(CourseGradeDetail);
