import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  DetailLink,
  DetailItem
} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import {
  CreateGradeTable,
  CreateStudentTable,
  CreateAttendanceTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';

import { fetchCourseDetails } from '../../../state/CourseActions';

function CourseDetail(props) {
  const {
    classes: { striped, tHead, tRow, tableTitle, header },
    match: { params }
  } = props;
  const { courseId } = params;

  const dispatch = useDispatch();

  const courseDetail = useSelector(state => {
    return state.courses.course;
  });

  useEffect(() => {
    dispatch(fetchCourseDetails({ accessLevel: 'my', courseId }));
  }, [dispatch, courseId]);

  if (!courseDetail) {
    return loadingJSX('Course Detail');
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

  const gradeTable = () => {
    if (!gradeSet) {
      return <p>Data not found</p>;
    }
    return (
      <CreateGradeTable
        header={header}
        tHead={tHead}
        data={gradeSet}
        tRow={tRow}
        striped={striped}
      />
    );
  };

  const attendanceTable = () => {
    if (!attendanceSet) {
      return <p>Data not found</p>;
    }
    return (
      <CreateAttendanceTable
        header={header}
        tHead={tHead}
        data={attendanceSet}
        tRow={tRow}
        striped={striped}
      />
    );
  };

  const studentTable = () => {
    if (!studentSet) {
      return <p>Data not found</p>;
    }
    return (
      <CreateStudentTable
        header={header}
        tHead={tHead}
        data={studentSet}
        tRow={tRow}
        striped={striped}
      />
    );
  };

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        {courseName}
      </Typography>
      <DetailItem k="Course Code" val={courseCode} />
      <DetailItem k="Subject" val={courseSubject} />
      <DetailLink k="School" val={schoolName} link={`/school/${schoolId}`} />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Grades"
        table={gradeTable()}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Attendance"
        table={attendanceTable()}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Student"
        table={studentTable()}
      />
    </div>
  );
}

CourseDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(TablePageStyles)(CourseDetail);
