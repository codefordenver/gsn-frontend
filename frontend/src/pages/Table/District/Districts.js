import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles, Typography } from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateDistrictTable } from 'components/sharedStyles/Table/CreateTablesStyle';

import { fetchDistricts } from '../../../state/DistrictActions';

function Districts(props) {
  const my_or_all = props.my_or_all;
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const dispatch = useDispatch();

  const districts = useSelector(state => state.districts.districts);
  useEffect(() => {
    dispatch(fetchDistricts({ accessLevel: 'my' }));
  }, [dispatch]);

  if (!districts) {
    return loadingJSX('courses');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        All Districts
        </Typography>
      < CreateDistrictTable 
        header = {header}
        tHead = {tHead} 
        data = {districts} 
        tRow = {tRow} 
        striped = {striped} 
        my_or_all_link = {my_or_all}/>
    </div>
  );
}

Districts.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(Districts);
