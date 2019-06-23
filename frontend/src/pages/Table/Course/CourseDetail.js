import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
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
import mapStateToProps from 'components/sharedStyles/Table/StateToProps';
import { fetchCourseDetails } from '../../../state/CourseActions';

function FullCourseDetail(props) {
  const {
    classes: { striped, tHead, tRow, tableTitle, header },
  } = props;
  const params = props.match;
  const { courseId } = params;
  const my_or_all = props.my_or_all;
  const my_or_all_url = "/" + my_or_all;
  const dispatch = useDispatch();

  const courseDetail = useSelector(state => {
    return state.courses.course;
  });

  useEffect(() => {
    dispatch(fetchCourseDetails({ accessLevel: my_or_all, courseId }));
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

  const gradeTable = (
    < CreateGradeTable 
            header = {header}
            tHead = {tHead} 
            data = {gradeSet} 
            tRow = {tRow} 
            striped = {striped}
            my_or_all_link = {my_or_all_url} />
  );

  const attendanceTable = (
    < CreateAttendanceTable 
            header = {header} 
            tHead = {tHead} 
            data = {attendanceSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all_url}/>
  );

  const studentTable = (
    < CreateStudentTable 
            header = {header} 
            tHead = {tHead} 
            data = {studentSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all_url}/>
  );

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{courseName}</Typography>
          <DetailItem k="Course Code" val={courseCode} />
          <DetailItem k="Subject" val={courseSubject} />
          <DetailLink k="School" val={schoolName} link={my_or_all_url + `/school/${schoolId}`} />

          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Grades" 
            table = {gradeTable}
            />
          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Attendance" 
            table = {attendanceTable}/>
          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Student" 
            table = {studentTable}/>
      </div>
  );
}

FullCourseDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

const CourseDetail = withStyles(TablePageStyles)(FullCourseDetail);
export default connect(mapStateToProps)(CourseDetail);
