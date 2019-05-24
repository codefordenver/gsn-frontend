import React, { useEffect, useState } from 'react';
import {
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getSchoolGradeDetail } from 'services/schoolServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function SchoolGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [schoolGradeDetail, setSchoolGradeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchoolGradeDetail().then((s) => {
      setSchoolGradeDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('School Grade Detail'));
  }

  const {
    schoolName,
    
  } = schoolGradeDetail;

  return (
    < CreateGradeTable header = {header} title = {schoolName} 
    tHead = {tHead} data = {schoolGradeDetail.gradeSet} tRow = {tRow} 
    striped = {striped} />
);
}


SchoolGradeDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(SchoolGradeDetail);
