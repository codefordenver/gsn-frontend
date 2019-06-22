import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import {
  withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateStudentTable } from 'components/sharedStyles/Table/CreateTablesStyle';


const mapStateToProps = (state, ownProps) => {
  const props = state.props;
  const my_or_all = ownProps.my_or_all;
  return {
    props, my_or_all
  };
};

function Students(props,otherProps) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [loading, setLoading] = useState(true);
  const students = props.selector;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(props.fetchData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
    loadingJSX('Students'));
  }

  const my_or_all = props.my_or_all;

  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        className={header}>
        My Students
      </Typography>
      < CreateStudentTable
        header = {header}
        tHead = {tHead}
        data = {students}
        tRow = {tRow}
        striped = {striped} 
        my_or_all_link = {my_or_all}/>
    </div>
  );
}


Students.propTypes = {
  classes: PropTypes.object,
};

const FullStudents = withStyles(TablePageStyles)(Students);
export default connect(mapStateToProps)(FullStudents);
