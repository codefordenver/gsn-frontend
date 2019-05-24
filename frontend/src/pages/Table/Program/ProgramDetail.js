import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getProgramDetail } from 'services/programServices';
import { DetailLink } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';



function ProgramDetail(props) {
  const [programDetail, setProgramDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const programIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in ProgramDetail', programIdParam);
    getProgramDetail(programIdParam).then((s) => {
      setProgramDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Program Detail'));
  }

  const {
    programName,
    programId,
  } = programDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{programName}</Typography>
          <DetailLink k="Students" val="Click Here" link={`/program/student/${programId}`} />
          <DetailLink k="Courses" val="Click Here" link={`/program/course/${programId}`} />
          <DetailLink k="Grades" val="Click Here" link={`/program/grade/${programId}`} />
      </div>
  );
}



ProgramDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(ProgramDetail);
