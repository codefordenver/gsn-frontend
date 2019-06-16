import React, { useEffect, useState } from 'react';
import {
  Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getProgramDetail } from 'services/programServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable, CreateStudentTable, CreateCourseTable, CreateNoteTable,
CreateAttendanceTable, CreateBehaviorTable} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';



function ProgramDetail(props) {
  const [programDetail, setProgramDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    classes: {
       striped, tHead, tRow, tableTitle
    },
  } = props;
  const { classes: { header }, match: { params } } = props;
  const programIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in ProgramDetail', programIdParam);
    getProgramDetail(programIdParam).then((s) => {
      setProgramDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('Program Detail'));
  }

  const {
    programName,
    studentSet,
    courseSet,
    gradeSet,
    behaviorSet,
    attendanceSet,
    noteSet
  } = programDetail;

  const gradeTable = (
    < CreateGradeTable 
            header = {header} 
            tHead = {tHead} 
            data = {gradeSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  const courseTable = (
    < CreateCourseTable 
            header = {header} 
            tHead = {tHead} 
            data = {courseSet} 
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

  const studentTable = (
    < CreateStudentTable 
            header = {header} 
            tHead = {tHead} 
            data = {studentSet} 
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

  const noteTable = (
    < CreateNoteTable 
            header = {header} 
            tHead = {tHead} 
            data = {noteSet} 
            tRow = {tRow} 
            striped = {striped} />
  );

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{programName}</Typography>


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
            title = "Behavior" 
            table = {behaviorTable}
            haveCreateSaveButtonBool={true}/>
          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Course" 
            table = {courseTable}/>
          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Student" 
            table = {studentTable}/>
          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Note" 
            table = {noteTable}
            haveCreateSaveButtonBool={true}/>


      </div>
  );
}



ProgramDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(ProgramDetail);
