import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  CreateAttendanceTable,
  CreateBehaviorTable,
  CreateNoteTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import { fetchStudent, postStudentNotes } from '../../../state/StudentActions';

function StudentDetail(props) {
  const {
    classes: { header, striped, tHead, tRow, tableTitle }
  } = props;

  // Props are provided by React Router
  const { studentId } = props.match.params;
  
  // Access level for note table 
  const accessLevel = 'all';

  // Access Level Variables
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  // Redux Hooks
  const studentDetail = useSelector(state => state.students.student);
  const dispatch = useDispatch();

  // React Hook to fetch StudentDetail data
  useEffect(() => {
    dispatch(fetchStudent({ accessLevel: myOrAll, studentId }));
  }, [dispatch, myOrAll, studentId]);

  if (!studentDetail) {
    return loadingJSX('Student Detail');
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
    behaviorSet,
    noteSet
  } = studentDetail;

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

  const attendanceTable = (
    <CreateAttendanceTable
      headerClassStyle={header}
      tHead={tHead}
      data={attendanceSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={myOrAllUrl}
    />
  );

  const behaviorTable = (
    <CreateBehaviorTable
      header={header}
      tHead={tHead}
      data={behaviorSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={myOrAllUrl}
    />
  );

  const noteTable = (
    <CreateNoteTable
      header={header}
      tHead={tHead}
      data={noteSet}
      tRow={tRow}
      striped={striped}
    />
  );

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        {studentName}
      </Typography>
      <DetailItem k="Gender" val={gender} />
      <DetailItem k="Birthdate" val={birthdate} />
      <DetailItem k="Grade" val={grade} />
      <DetailItem k="Year" val={studentYear} />
      <DetailItem k="Term" val={studentTerm} />
      <DetailItem k="State Id" val={stateId} />
      <DetailLink k="School" val={school} link={myOrAllUrl + `/school/${schoolId}`} />

      <CreateTableHeader
        title="Grades"
        table={gradeTable}
        headerClassStyle={tableTitle}
      />

      <CreateTableHeader
        title="Attendance"
        table={attendanceTable}
        headerClassStyle={tableTitle}
      />

      <CreateTableHeader
        title="Behavior"
        table={behaviorTable}
        headerClassStyle={tableTitle}
        haveCreateSaveButtonBool
      />

      <CreateTableHeader
        title="Note"
        table={noteTable}
        headerClassStyle={tableTitle}
        url={props.location.pathname}
        accessLevel={accessLevel}
        action={postStudentNotes}
        haveCreateSaveButtonBool
      />
    </div>
  );
}

StudentDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

export default withStyles(TablePageStyles)(StudentDetail);
