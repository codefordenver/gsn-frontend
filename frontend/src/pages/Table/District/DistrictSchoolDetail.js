import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictSchoolDetail } from 'services/districtServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function DistrictSchoolDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [districtSchoolDetail, setDistrictSchoolDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDistrictSchoolDetail().then((s) => {
      setDistrictSchoolDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('District School Detail'));
  }

  const {
      districtName,
  } = districtSchoolDetail;

  return (
    < CreateSchoolTable header = {header} title = {districtName}
    tHead = {tHead} data = {districtSchoolDetail.schoolSet} tRow = {tRow} 
    striped = {striped} />
);
}



DistrictSchoolDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(DistrictSchoolDetail);
