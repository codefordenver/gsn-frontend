import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchStudents } from 'state/StudentActions';

function Students(props) {
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  // Access Level Variables
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  // Redux Hooks
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  // React Hook to fetch Course data
  useEffect(() => {
    dispatch(fetchStudents({ accessLevel: myOrAll }));
  }, [dispatch, myOrAll]);

  if (!students) {
    return loadingJSX('students');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        {myOrAll + " Students"}
      </Typography>
      <CreateStudentTable
        header={header}
        tHead={tHead}
        data={students}
        tRow={tRow}
        striped={striped}
        my_or_all_link={myOrAllUrl}
      />
    </div>
  );
}

Students.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(Students);
