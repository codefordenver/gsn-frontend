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
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';




function CourseDetail(props) {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    classes: {
       striped, tHead, tRow, tableTitle
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

  const gradeTable = (
    < CreateGradeTable 
            header = {header}
            tHead = {tHead} 
            data = {gradeSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  const attendanceTable = (
    < CreateAttendanceTable 
            header = {header} 
            tHead = {tHead} 
            data = {attendanceSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  const studentTable = (
    < CreateStudentTable 
            header = {header} 
            tHead = {tHead} 
            data = {studentSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{courseName}</Typography>
          <DetailItem k="Course Code" val={courseCode} />
          <DetailItem k="Subject" val={courseSubject} />
          <DetailLink k="School" val={schoolName} link={`/school/${schoolId}`} />

          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Grades" 
            table = {gradeTable}/>
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



CourseDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(CourseDetail);
