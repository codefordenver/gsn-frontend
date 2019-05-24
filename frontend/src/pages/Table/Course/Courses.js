import React, { useEffect, useState } from 'react';
import { getCourses } from 'services/courseServices';
import PropTypes from 'prop-types';

import {
 withStyles,
} from '@material-ui/core';

import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';


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
    < CreateCourseTable header = {header} title = 'All Courses'
    tHead = {tHead} data = {courses} tRow = {tRow} 
    striped = {striped} />
  );
}


Courses.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(TablePageStyles)(Courses);
