import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateDistrictTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchDistricts } from '../../../state/DistrictActions';

function Districts(props) {
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  // Access Level Variables
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  // Redux Hooks
  const dispatch = useDispatch();
  const districts = useSelector(state => state.districts.districts);

  // React Hook to fetch District data
  useEffect(() => {
    dispatch(fetchDistricts({ accessLevel: myOrAll }));
  }, [dispatch, myOrAll]);

  if (!districts) {
    return loadingJSX('Districts');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        {myOrAll + " Districts"}
      </Typography>
      <CreateDistrictTable
        header={header}
        tHead={tHead}
        data={districts}
        tRow={tRow}
        striped={striped}
        my_or_all_link={myOrAllUrl}
      />
    </div>
  );
}

Districts.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(Districts);
