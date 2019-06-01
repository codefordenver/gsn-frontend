import React, { useEffect, useState } from 'react';
import {
   Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentDetail } from 'services/studentServices';
import { DetailLink, DetailItem, DetailTable } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable, CreateAttendanceTable, CreateBehaviorTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';



function StudentDetail(props) {
  const [studentDetail, setStudentDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const studentIdParam = params;
  const {
    classes: {
       striped, tHead, tRow, tableTitle
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
            headerClassStyle = {header}
            tHead = {tHead} 
            data = {attendanceSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  const behaviorTable = (
    < CreateBehaviorTable 
            header = {header} 
            tHead = {tHead} 
            data = {behaviorSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  const gradeHeader = (
    <CreateTableHeader
            title = "Grades" 
            table = {gradeTable}/>
  );

  const attendanceHeader = (
    <CreateTableHeader
            title = "Attendance" 
            table = {attendanceTable}/>
  );

  const behaviorHeader = (
    <CreateTableHeader
            title = "Behavior" 
            table = {behaviorTable}/>
  );

  

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

          <DetailTable k={gradeHeader} />
          <DetailTable k={attendanceHeader} />
          <DetailTable k={behaviorHeader} />
    </div>
  );
}




StudentDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(StudentDetail);
