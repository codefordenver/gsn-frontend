import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from 'state/StudentActions';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import MyStudentsMultiCheckbox from '../../components/ManageData/MyStudentsMultiCheckbox';

function MyStudents(props) {
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const [loading, setLoading] = useState(true);
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents({ accessLevel: 'my' }));
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return loadingJSX('Students');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        Add/Remove My Students
      </Typography>
      <MyStudentsMultiCheckbox />
      
    </div>
  );
}

MyStudents.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(MyStudents);
