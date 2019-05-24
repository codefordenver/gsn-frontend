import React, { useEffect, useState } from 'react';
import {
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getProgramGradeDetail } from 'services/programServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable } from 'components/sharedStyles/Table/CreateTablesStyle';


function ProgramGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [programGradeDetail, setProgramGradeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProgramGradeDetail().then((s) => {
      setProgramGradeDetail(s);
      setLoading(false);
    });
  }, []);

  
  if (loading) {
    return (
    loadingJSX('Program Grade Detail'));
  }

  const {
    programName,
    
  } = programGradeDetail;

  return (
    < CreateGradeTable header = {header} title = {programName} 
    tHead = {tHead} data = {programGradeDetail.gradeSet} tRow = {tRow} 
    striped = {striped} />
);
}


ProgramGradeDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(ProgramGradeDetail);
