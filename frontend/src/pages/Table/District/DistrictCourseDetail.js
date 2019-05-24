import React, { useEffect, useState } from 'react';
import {
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictCourseDetail } from 'services/districtServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function DistrictCourseDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [districtCourseDetail, setDistrictCourseDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDistrictCourseDetail().then((s) => {
      setDistrictCourseDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('District Course Detail'));
  }

  const {
    districtName,
    
  } = districtCourseDetail;

  return (
    < CreateCourseTable header = {header} title = {districtName} 
    tHead = {tHead} data = {districtCourseDetail.CourseSet} tRow = {tRow} 
    striped = {striped} />
);
}


DistrictCourseDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(DistrictCourseDetail);
