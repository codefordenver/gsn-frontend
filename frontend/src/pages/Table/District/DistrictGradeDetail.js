import React, { useEffect, useState } from 'react';
import {
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getDistrictGradeDetail } from 'services/districtServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function DistrictGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [districtGradeDetail, setDistrictGradeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDistrictGradeDetail().then((s) => {
      setDistrictGradeDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('District Grade Detail'));
  }

  const {
    districtName,
    
  } = districtGradeDetail;

  return (
    < CreateGradeTable header = {header} title = {districtName} 
    tHead = {tHead} data = {districtGradeDetail.gradeSet} tRow = {tRow} 
    striped = {striped} />
);
}


DistrictGradeDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(DistrictGradeDetail);
