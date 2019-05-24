import React, { useEffect, useState } from 'react';
import {
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getSchoolAttendanceDetail } from 'services/schoolServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateAttendanceTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function SchoolAttendanceDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [schoolAttendanceDetail, setSchoolAttendanceDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchoolAttendanceDetail().then((s) => {
      setSchoolAttendanceDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('School Attendance Detail'));
  }

  const {
    schoolName,
    
  } = schoolAttendanceDetail;

  return (
    < CreateAttendanceTable header = {header} title = {schoolName} 
    tHead = {tHead} data = {schoolAttendanceDetail.AttendanceSet} tRow = {tRow} 
    striped = {striped} />
);
}


SchoolAttendanceDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(SchoolAttendanceDetail);
