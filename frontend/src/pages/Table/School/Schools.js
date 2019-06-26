import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateSchoolTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchSchools } from '../../../state/SchoolActions';

function Schools(props) {
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const dispatch = useDispatch();
  const schools = useSelector(state => state.schools.schools);
  useEffect(() => {
    dispatch(fetchSchools({ accessLevel: myOrAll }));
  }, [dispatch, myOrAll]);

  if (!schools) {
    return loadingJSX('Schools');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        {myOrAll + " Schools"}
      </Typography>
      <CreateSchoolTable
        header={header}
        tHead={tHead}
        data={schools}
        tRow={tRow}
        striped={striped}
        my_or_all_link={myOrAllUrl}
      />
    </div>
  );
}

Schools.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(Schools);
