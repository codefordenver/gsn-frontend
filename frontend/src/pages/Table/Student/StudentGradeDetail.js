import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentGradeDetail } from 'services/studentServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function StudentGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [studentGradeDetail, setStudentGradeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentGradeDetail().then((s) => {
      setStudentGradeDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('Student Grade Detail'));
  }

  const {
    studentName,
    
  } = studentGradeDetail;

  return (
    < CreateGradeTable header = {header} title = {studentName} 
    tHead = {tHead} data = {studentGradeDetail.gradeSet} tRow = {tRow} 
    striped = {striped} />
);
}




StudentGradeDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(StudentGradeDetail);
