import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchCourses } from '../../../state/CourseActions';

function FullCourses(props) {
  const my_or_all = props.my_or_all;
  const my_or_all_url = `/${my_or_all}`;
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  const dispatch = useDispatch();

  const courses = useSelector(state => state.courses.courses);
  useEffect(() => {
    dispatch(fetchCourses({ accessLevel: my_or_all }));
  }, [dispatch, my_or_all]);

  if (!courses) {
    return loadingJSX('courses');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        { my_or_all + " Courses" }
      </Typography>
      <CreateCourseTable
        header={header}
        tHead={tHead}
        data={courses}
        tRow={tRow}
        striped={striped}
        my_or_all_link={my_or_all_url}
      />
    </div>
  );
}

FullCourses.propTypes = {
  classes: PropTypes.object
};

// const Courses = withStyles(TablePageStyles)(FullCourses);
export default withStyles(TablePageStyles)(FullCourses);
