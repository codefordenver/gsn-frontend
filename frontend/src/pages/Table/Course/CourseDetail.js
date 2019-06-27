import React, { useEffect } from 'react';
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
  CreateAttendanceTable,
  CreateNoteTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import {
  fetchCourseDetails,
  postCourseNotes
} from '../../../state/CourseActions';

function CourseDetail(props) {
  const {
    classes: { striped, tHead, tRow, tableTitle, header }
  } = props;

  // Props are provided by React Router
  const { courseId } = props.match.params;
  
  // Access level for note table   
  const accessLevel = 'my';

  // Access Level Variables
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  // Redux Hooks
  const dispatch = useDispatch();
  const courseDetail = useSelector(state => {
    return state.courses.course;
  });

  // React Hook to fetch CourseDetail data
  useEffect(() => {
    dispatch(fetchCourseDetails({ accessLevel: myOrAll, courseId }));
  }, [dispatch, courseId, myOrAll]);

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
    studentSet,
    noteSet
  } = courseDetail;

  const gradeTable = (
    <CreateGradeTable
      header={header}
      tHead={tHead}
      data={gradeSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={myOrAllUrl}
    />
  );

  const attendanceTable = (
    <CreateAttendanceTable
      header={header}
      tHead={tHead}
      data={attendanceSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={myOrAllUrl}
    />
  );

  const studentTable = (
    <CreateStudentTable
      header={header}
      tHead={tHead}
      data={studentSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={myOrAllUrl}
    />
  );

  const noteTable = (
    <CreateNoteTable
      header={header}
      tHead={tHead}
      data={noteSet}
      tRow={tRow}
      striped={striped}
    />
  );

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        {courseName}
      </Typography>
      <DetailItem k="Course Code" val={courseCode} />
      <DetailItem k="Subject" val={courseSubject} />
      <DetailLink k="School" val={schoolName} link={myOrAllUrl + `/school/${schoolId}`} />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Grades"
        table={gradeTable}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Attendance"
        table={attendanceTable}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Student"
        table={studentTable}

      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Note"
        table={noteTable}
        url={props.location.pathname}
        accessLevel={accessLevel}
        action={postCourseNotes}
        haveCreateSaveButtonBool
      />
    </div>
  );
}

CourseDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

export default withStyles(TablePageStyles)(CourseDetail);
