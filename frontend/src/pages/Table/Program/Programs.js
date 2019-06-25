import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateProgramTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchPrograms } from '../../../state/ProgramActions';

function FullPrograms(props) {
  const my_or_all = props.my_or_all;
  const my_or_all_url = `/${my_or_all}`;
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const dispatch = useDispatch();

  const programs = useSelector(state => state.programs.programs);
  useEffect(() => {
    dispatch(fetchPrograms({ accessLevel: my_or_all }));
  }, [dispatch, my_or_all]);

  if (!programs) {
    return loadingJSX('Programs');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        { my_or_all + " Programs" }
      </Typography>
      <CreateProgramTable
        header={header}
        tHead={tHead}
        data={programs}
        tRow={tRow}
        striped={striped}
        my_or_all_link={my_or_all_url}
      />
    </div>
  );
}

FullPrograms.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(FullPrograms);
