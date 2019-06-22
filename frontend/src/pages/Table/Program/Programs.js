import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateProgramTable } from 'components/sharedStyles/Table/CreateTablesStyle';

import { fetchPrograms } from '../../../state/ProgramActions';

function Programs(props) {
  const {
    classes: { header, striped, tHead, tRow }
  } = props;
  
  const dispatch = useDispatch();

  const programs = useSelector(state => state.programs.programs);
  useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);

  if (!programs) {
    return loadingJSX('Programs');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        All Programs
      </Typography>
      <CreateProgramTable
        header={header}
        tHead={tHead}
        data={programs}
        tRow={tRow}
        striped={striped}
      />
    </div>
  );
}

Programs.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(Programs);
