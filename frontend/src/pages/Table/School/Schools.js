import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchSchools } from '../../../state/SchoolActions';

function FullSchools(props) {
  const my_or_all = props.my_or_all;
  const my_or_all_url = `/${my_or_all}`;
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const dispatch = useDispatch();
  const schools = useSelector(state => state.schools.schools);
  useEffect(() => {
    dispatch(fetchSchools({ accessLevel: my_or_all }));
  }, [dispatch, my_or_all]);

  if (!schools) {
    return loadingJSX('Schools');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        { my_or_all + " Schools"}
      </Typography>
      <CreateSchoolTable
        header={header}
        tHead={tHead}
        data={schools}
        tRow={tRow}
        striped={striped}
        my_or_all_link={my_or_all_url}
      />
    </div>
  );
}

FullSchools.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(FullSchools);
