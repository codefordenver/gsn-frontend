import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchStudents } from 'state/StudentActions'
import mapStateToProps from 'components/sharedStyles/Table/StateToProps';

function FullStudents(props) {
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const my_or_all = props.my_or_all;
  const my_or_all_url = "/" + my_or_all;
  const [loading, setLoading] = useState(true);
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents({ accessLevel: my_or_all }));
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return loadingJSX('Students');
  }

  

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
         { my_or_all + " Students" }
      </Typography>
      < CreateStudentTable
        header = {header}
        tHead = {tHead}
        data = {students}
        tRow = {tRow}
        striped = {striped} 
        my_or_all_link = {"/" + my_or_all_url}/>
    </div>
  );
}

FullStudents.propTypes = {
  classes: PropTypes.object
};

const Students = withStyles(TablePageStyles)(FullStudents);
export default connect(mapStateToProps)(Students);
