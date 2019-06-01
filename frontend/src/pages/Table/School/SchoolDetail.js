import React, { useEffect, useState } from 'react';
import {
   Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getSchoolDetail } from 'services/schoolServices';
import { DetailLink } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable, CreateAttendanceTable, CreateStudentTable, 
  CreateCourseTable, CreateBehaviorTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';



function SchoolDetail(props) {
  const [schoolDetail, setSchoolDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const {
    classes: {
       striped, tHead, tRow,
    },
  } = props;
  const schoolIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in SchoolDetail', schoolIdParam);
    getSchoolDetail(schoolIdParam).then((s) => {
      setSchoolDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
    loadingJSX('School Detail'));
  }

  const {
      schoolName,
      districtId,
      districtName,
      studentSet,
      courseSet,
      gradeSet,
      attendanceSet,
      behaviorSet
  } = schoolDetail;

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

  const behaviorTable = (
    < CreateBehaviorTable 
            header = {header}
            tHead = {tHead} 
            data = {behaviorSet} 
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
          <Typography className={header} component="h1" variant="h4">{schoolName}</Typography>
          <DetailLink k="District Name" val={districtName} link={`/district/${districtId}`} />

          <CreateTableHeader
            headerClassStyle = {header}
            title = "Grades" 
            table = {gradeTable}/>
          <CreateTableHeader
            headerClassStyle = {header}
            title = "Attendance" 
            table = {attendanceTable}/>
          <CreateTableHeader
            headerClassStyle = {header}
            title = "Behavior" 
            table = {behaviorTable}/>
          <CreateTableHeader
            headerClassStyle = {header}
            title = "Course" 
            table = {courseTable}/>
          <CreateTableHeader
            headerClassStyle = {header}
            title = "Student" 
            table = {studentTable}/>
      </div>
  );
}



SchoolDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(SchoolDetail);
