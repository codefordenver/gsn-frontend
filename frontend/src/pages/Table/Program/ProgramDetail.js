import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { fetchProgramDetails } from '../../../state/ProgramActions';

function ProgramDetail(props) {
  const {
    classes: { striped, tHead, tRow, tableTitle, header }
  } = props;

  // Props are provided by React Router
  const { programId } = props.match.params;

  // Access Level Variables
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  // Redux Hooks
  const dispatch = useDispatch();
  const programDetail = useSelector(state => {
    return state.programs.program;
  });

  // React Hook to fetch ProgramDetail data
  useEffect(() => {
    dispatch(fetchProgramDetails({ accessLevel: myOrAll, programId }));
  }, [dispatch, myOrAll, programId]);

  if (!programDetail) {
    return loadingJSX('District Detail');
  }

  const { programName, gradeSet, courseSet, studentSet } = programDetail;

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

  const courseTable = (
    <CreateCourseTable
      header={header}
      tHead={tHead}
      data={courseSet}
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

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        {programName}
      </Typography>
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Grades"
        table={gradeTable}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Course"
        table={courseTable}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Student"
        table={studentTable}
      />
    </div>
  );
}

ProgramDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(TablePageStyles)(ProgramDetail);
