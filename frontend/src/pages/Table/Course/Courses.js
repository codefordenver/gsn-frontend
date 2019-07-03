import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { fetchCourses } from '../../../state/CourseActions';

function Courses(props) {
  const {
    classes: { header, striped, tHead, tRow }
  } = props;

  // Access Level Variables
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  // Redux Hooks
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);

  // React Hook to fetch Course data
  useEffect(() => {
    dispatch(fetchCourses({ accessLevel: myOrAll }));
  }, [dispatch, myOrAll]);

  if (!courses) {
    return loadingJSX('courses');
  }

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        {`${myOrAll} Courses`}
      </Typography>
      <CreateCourseTable
        header={header}
        tHead={tHead}
        data={courses}
        tRow={tRow}
        striped={striped}
        my_or_all_link={myOrAllUrl}
      />
    </div>
  );
}

Courses.propTypes = {
  classes: PropTypes.object
};

export default withStyles(TablePageStyles)(Courses);
