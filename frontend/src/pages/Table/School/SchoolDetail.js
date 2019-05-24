import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getSchoolDetail } from 'services/schoolServices';
import { DetailLink } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';



function SchoolDetail(props) {
  const [schoolDetail, setSchoolDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const schoolIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in SchoolDetail', schoolIdParam);
    getSchoolDetail(schoolIdParam).then((s) => {
      setSchoolDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('School Detail'));
  }

  const {
      schoolName,
      schoolId,
      districtId,
      districtName,
  } = schoolDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{schoolName}</Typography>
          <DetailLink k="District Name" val={districtName} link={`/district/${districtId}`} />
          <DetailLink k="Students" val="Click Here" link={`/school/student/${schoolId}`} />
          <DetailLink k="Courses" val="Click Here" link={`/school/course/${schoolId}`} />
          <DetailLink k="Grades" val="Click Here" link={`/school/grade/${schoolId}`} />
          <DetailLink k="Attendance" val="Click Here" link={`/school/attendance/${schoolId}`} />
      </div>
  );
}



SchoolDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(SchoolDetail);
