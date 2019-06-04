import React, { useEffect, useState } from 'react';
import { getCourses } from 'services/courseServices';
import PropTypes from 'prop-types';

import {
 withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import { Typography } from '@material-ui/core';



function Courses(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses().then((s) => {
      setCourses(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Courses'));
  }

  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        className={header}>
        All Courses
      </Typography>
      < CreateCourseTable 
        header = {header} 
        tHead = {tHead} 
        data = {courses} 
        tRow = {tRow} 
        striped = {striped} />
    </div>
  );
}


Courses.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Courses);
