import React, { useEffect, useState } from 'react';
import { Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { DetailLink } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { ChevronRightOutlined } from 'components/Icons';



function MyPrograms(props) {
  const [programDetail, setProgramDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const programIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in MyProgramDetail', programIdParam);
      setLoading(false);
    });
  
  if (loading) {
    return (
    loadingJSX('My Programs Homepage'));
  }


  return (<ChevronRightOutlined />
      /*<div>
          <Typography className={header} component="h1" variant="h4">My Programs Homepage</Typography>
          <DetailLink k="Programs" val="Click Here" link={`/program`} />
          <DetailLink><ChevronRightOutlined /></DetailLink>
          <DetailLink k="Students" val="Click Here" link={`/student`} />
          <DetailLink k="Grades" val="Click Here" link={`/program`} />
      </div>*/
  );
}



MyPrograms.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(MyPrograms);
