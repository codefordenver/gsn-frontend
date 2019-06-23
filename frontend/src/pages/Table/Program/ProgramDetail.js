import React, { useEffect, useState } from 'react';
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
    classes: { striped, tHead, tRow, tableTitle, header },
    match: { params }
  } = props;
  const { programId } = params;

  const dispatch = useDispatch();

  const programDetail = useSelector(state => {
    return state.programs.program;
  });

  useEffect(() => {
    dispatch(fetchProgramDetails({ accessLevel: 'my', programId }));
  }, [dispatch, programId]);

  if (!programDetail) {
    return loadingJSX('Program Detail');
  }

  const { programName, studentSet, courseSet, gradeSet } = programDetail;

  const gradeTable = (
    <CreateGradeTable
      header={header}
      tHead={tHead}
      data={gradeSet}
      tRow={tRow}
      striped={striped}
    />
  );

  const courseTable = (
    <CreateCourseTable
      header={header}
      tHead={tHead}
      data={courseSet}
      tRow={tRow}
      striped={striped}
    />
  );

  const studentTable = (
    <CreateStudentTable
      header={header}
      tHead={tHead}
      data={studentSet}
      tRow={tRow}
      striped={striped}
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
