import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentDetail } from 'services/studentServices';
import { DetailLink, DetailItem} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';



function StudentDetail(props) {
  const [studentDetail, setStudentDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const studentIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in StudentDetail', studentIdParam);
    getStudentDetail(studentIdParam).then((s) => {
      setStudentDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Student Detail'));
  }

  const {
    studentId,
    studentName,
    gender,
    school,
    schoolId,
    birthdate,
    grade,
    stateId,
    studentYear,
    studentTerm,
  } = studentDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{studentName}</Typography>
          <DetailItem k="Gender" val={gender} />
          <DetailItem k="Birthdate" val={birthdate} />
          <DetailItem k="Grade" val={grade} />
          <DetailItem k="Year" val={studentYear} />
          <DetailItem k="Term" val={studentTerm} />
          <DetailItem k="State Id" val={stateId} />
          <DetailLink k="School" val={school} link={`/school/${schoolId}`} />
          <DetailLink k="Grades" val="Click Here" link={`/students/grade/${studentId}`} />
          <DetailLink k="Attendance" val="Click Here" link={`/students/attendance/${studentId}`} />
          <DetailLink k="Course" val="Click Here" link={`/students/course/${studentId}`} />
      </div>
  );
}




StudentDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(StudentDetail);
