import React, { useEffect, useState } from 'react';
import {
 Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { getCourseDetail } from 'services/courseServices';
import { DetailLink, DetailItem} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable, CreateStudentTable, CreateAttendanceTable } from 'components/sharedStyles/Table/CreateTablesStyle';




function CourseDetail(props) {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    classes: {
       striped, tHead, tRow,
    },
  } = props;
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
    schoolName,
    schoolId,
    courseName,
    courseCode,
    courseSubject,
    gradeSet,
    attendanceSet,
    studentSet
  } = courseDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{courseName}</Typography>
          <DetailItem k="Course Code" val={courseCode} />
          <DetailItem k="Subject" val={courseSubject} />
          <DetailLink k="School" val={schoolName} link={`/school/${schoolId}`} />

          < CreateGradeTable header = {header} title = "Grades"
          tHead = {tHead} data = {gradeSet} tRow = {tRow} 
          striped = {striped} />

          < CreateAttendanceTable header = {header} title = "Attendance"
          tHead = {tHead} data = {attendanceSet} tRow = {tRow} 
          striped = {striped} />

          < CreateStudentTable header = {header} title = "Student"
          tHead = {tHead} data = {studentSet} tRow = {tRow} 
          striped = {striped} />

      </div>
  );
}



CourseDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(CourseDetail);
