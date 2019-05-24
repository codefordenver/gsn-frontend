import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictStudentDetail } from 'services/districtServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function DistrictStudentDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [districtStudentDetail, setDistrictStudentDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDistrictStudentDetail().then((s) => {
      setDistrictStudentDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('District Student Detail'));
  }

  const {
      districtId,
      districtName,
  } = districtStudentDetail;

  return (
    < CreateStudentTable header = {header} title = {districtName}
    tHead = {tHead} data = {districtStudentDetail.studentSet} tRow = {tRow} 
    striped = {striped} />
);
}



DistrictStudentDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(DistrictStudentDetail);
