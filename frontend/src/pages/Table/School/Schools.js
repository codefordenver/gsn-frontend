import React, { useEffect, useState } from 'react';
import { getSchools } from 'services/schoolServices';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';

import { fetchSchools } from '../../../state/SchoolActions';

function Schools(props) {
  const my_or_all = props.my_or_all;
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const dispatch = useDispatch();

  const schools = useSelector(state => state.schools.schools);
  useEffect(() => {
    dispatch(fetchSchools({ accessLevel: 'my' }));
  }, [dispatch]);

  if (!schools) {
    return loadingJSX('Schools');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        All Schools
      </Typography>
      < CreateSchoolTable 
        header = {header} 
        tHead = {tHead} 
        data = {schools} 
        tRow = {tRow} 
        striped = {striped} 
        my_or_all_link = {my_or_all}/>
    </div>
  );
}

Schools.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(Schools);
