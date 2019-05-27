import React, { useEffect, useState } from 'react';
import {
   Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentDetail } from 'services/studentServices';
import { DetailLink, DetailItem} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable, CreateAttendanceTable, CreateBehaviorTable } from 'components/sharedStyles/Table/CreateTablesStyle';




function StudentDetail(props) {
  const [studentDetail, setStudentDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const studentIdParam = params;
  const {
    classes: {
       striped, tHead, tRow,
    },
  } = props;

  useEffect(() => {
    console.log('useEffect ran in StudentDetail', studentIdParam);
    getStudentDetail(studentIdParam).then((s) => {
      setStudentDetail(s);
      setLoading(false);});
  }, []);

  if (loading) {
    return (
    loadingJSX('Student Detail'));

    
  }

  const {
    studentName,
    gender,
    school,
    schoolId,
    birthdate,
    grade,
    stateId,
    studentYear,
    studentTerm,
    gradeSet,
    attendanceSet,
    behaviorSet
  } = studentDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{studentName}</Typography>
          <DetailItem k="Gender" val={gender} />
          <DetailItem k="Birthdate" val={birthdate} />
          <DetailItem k="Grade" val={grade} />
          <DetailItem k="Year" val={studentYear} />
          <DetailItem k="Term" val={studentTerm} />
          <DetailItem k="State Id" val={stateId} />
          <DetailLink k="School" val={school} link={`/school/${schoolId}`} />
          

          < CreateGradeTable header = {header} title = "Grades"
          tHead = {tHead} data = {gradeSet} tRow = {tRow} 
          striped = {striped} />

          < CreateAttendanceTable header = {header} title = "Attendance"
          tHead = {tHead} data = {attendanceSet} tRow = {tRow} 
          striped = {striped} />

          < CreateBehaviorTable header = {header} title = "Behavior"
          tHead = {tHead} data = {behaviorSet} tRow = {tRow} 
          striped = {striped} />




    </div>
  );
}




StudentDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(StudentDetail);
