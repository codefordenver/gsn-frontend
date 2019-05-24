import React, { useEffect, useState } from 'react';
import {
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictAttendanceDetail } from 'services/districtServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateAttendanceTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function DistrictAttendanceDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [districtAttendanceDetail, setDistrictAttendanceDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDistrictAttendanceDetail().then((s) => {
      setDistrictAttendanceDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('District Attendance Detail'));
  }

  const {
    districtName,
    
  } = districtAttendanceDetail;

  return (
    < CreateAttendanceTable header = {header} title = {districtName} 
    tHead = {tHead} data = {districtAttendanceDetail.AttendanceSet} tRow = {tRow} 
    striped = {striped} />
);
}


DistrictAttendanceDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(DistrictAttendanceDetail);
