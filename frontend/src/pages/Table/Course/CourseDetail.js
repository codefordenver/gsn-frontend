import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { getCourseDetail } from 'services/courseServices';
import { DetailLink, DetailItem} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';



function CourseDetail(props) {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const courseIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in CourseDetail', courseIdParam);
    getCourseDetail(courseIdParam).then((s) => {
      setCourseDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Course Detail'));
  }

  const {
    courseId,
    schoolName,
    schoolId,
    courseName,
    courseCode,
    courseSubject,
  } = courseDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{courseName}</Typography>
          <DetailItem k="Course Code" val={courseCode} />
          <DetailItem k="Subject" val={courseSubject} />
          <DetailLink k="School" val={schoolName} link={`/school/${schoolId}`} />
          <DetailLink k="Students" val="Click Here" link={`/course/student/${courseId}`} />
          <DetailLink k="Grades" val="Click Here" link={`/course/grade/${courseId}`} />
      </div>
  );
}



CourseDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(CourseDetail);
