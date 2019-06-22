import React, { useEffect, useState } from 'react';
import {
  Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getProgramDetail } from 'services/programServices';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { CreateGradeTable, CreateStudentTable, CreateCourseTable } from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';



function ProgramDetail(props) {
  const my_or_all = props.my_or_all;
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
    gradeSet
  } = programDetail;

  const gradeTable = (
    < CreateGradeTable 
            header = {header} 
            tHead = {tHead} 
            data = {gradeSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all}/>
  );

  const courseTable = (
    < CreateCourseTable 
            header = {header} 
            tHead = {tHead} 
            data = {courseSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all}/>
  );

  const studentTable = (
    < CreateStudentTable 
            header = {header} 
            tHead = {tHead} 
            data = {studentSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all}/>
  );

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{programName}</Typography>


          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Grades" 
            table = {gradeTable}
            my_or_all_link = {my_or_all}/>
          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Course" 
            table = {courseTable}/>
          <CreateTableHeader
            headerClassStyle = {tableTitle}
            title = "Student" 
            table = {studentTable}/>
          


      </div>
  );
}



ProgramDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(TablePageStyles)(ProgramDetail);
