import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictDetail } from 'services/districtServices';
import { DetailLink, DetailItem} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';



function DistrictDetail(props) {
  const [districtDetail, setDistrictDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const districtIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in DistrictDetail', districtIdParam);
    getDistrictDetail(districtIdParam).then((s) => {
      setDistrictDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('District Detail'));
  }

  const {
    districtName,
    districtId,
    state,
    city,
    code
  } = districtDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{districtName}</Typography>
          <DetailItem k="Code" val={code} />
          <DetailItem k="City" val={city} />
          <DetailItem k="State" val={state} />
          <DetailLink k="Schools" val="Click Here" link={`/district/school/${districtId}`} />
          <DetailLink k="Students" val="Click Here" link={`/district/student/${districtId}`} />
          <DetailLink k="Courses" val="Click Here" link={`/district/course/${districtId}`} />
          <DetailLink k="Grades" val="Click Here" link={`/district/grade/${districtId}`} />
          <DetailLink k="Attendance" val="Click Here" link={`/district/attendance/${districtId}`} />
      </div>
  );
}




DistrictDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(DistrictDetail);
