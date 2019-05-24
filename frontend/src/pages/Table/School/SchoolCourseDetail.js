import React, { useEffect, useState } from 'react';
import {
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getSchoolCourseDetail } from 'services/schoolServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function SchoolCourseDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [schoolCourseDetail, setSchoolCourseDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchoolCourseDetail().then((s) => {
      setSchoolCourseDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('School Course Detail'));
  }

  const {
    schoolName,
    
  } = schoolCourseDetail;

  return (
    < CreateCourseTable header = {header} title = {schoolName} 
    tHead = {tHead} data = {schoolCourseDetail.CourseSet} tRow = {tRow} 
    striped = {striped} />
);
}


SchoolCourseDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(SchoolCourseDetail);
