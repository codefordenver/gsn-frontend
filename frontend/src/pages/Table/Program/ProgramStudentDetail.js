import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getProgramStudentDetail } from 'services/programServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';

function ProgramStudentDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [programStudentDetail, setProgramStudentDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProgramStudentDetail().then((s) => {
      setProgramStudentDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Program Student Detail'));
  }

  const {
      programId,
      programName,
  } = programStudentDetail;

  return (
    < CreateStudentTable header = {header} title = {programName}
    tHead = {tHead} data = {programStudentDetail.studentSet} tRow = {tRow} 
    striped = {striped} />
);
}



ProgramStudentDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(ProgramStudentDetail);
