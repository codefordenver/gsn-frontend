import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import {
  CreateGradeTable,
  CreateStudentTable,
  CreateCourseTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import mapStateToProps from 'components/sharedStyles/Table/StateToProps';
import { fetchProgramDetails } from '../../../state/ProgramActions';

function FullProgramDetail(props) {
  const {
    classes: { striped, tHead, tRow, tableTitle, header },
  } = props;
  const params = props.match;
  const { programId } = params;
  const my_or_all = props.my_or_all;
  const my_or_all_url = "/" + my_or_all;
  const dispatch = useDispatch();

  const programDetail = useSelector(state => {
    return state.programs.program;
  });

  useEffect(() => {
    dispatch(fetchProgramDetails({ accessLevel: my_or_all, programId }));
  }, [dispatch, programId]);

  if (!programDetail) {
    return loadingJSX('District Detail');
  }

  const { programName, gradeSet, courseSet, studentSet } = programDetail;

  const gradeTable = 
    (
    < CreateGradeTable 
            header = {header} 
            tHead = {tHead} 
            data = {gradeSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all_url}/>
  );


  const courseTable = (
    < CreateCourseTable 
            header = {header} 
            tHead = {tHead} 
            data = {courseSet} 
            tRow = {tRow} 
            striped = {striped} 
            my_or_all_link = {my_or_all_url}/>
  );

  const studentTable =  (
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
          <Typography className={header} component="h1" variant="h4">{programName}</Typography>
            <CreateTableHeader
              headerClassStyle = {tableTitle}
              title = "Grades" 
              table = {gradeTable} />
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




FullProgramDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

const ProgramDetail = withStyles(TablePageStyles)(FullProgramDetail);
export default connect(mapStateToProps)(ProgramDetail);
