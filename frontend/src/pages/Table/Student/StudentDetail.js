import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, withStyles,  TextField, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

import {
  DetailLink,
  DetailItem,
  DetailTable
} from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import {
  CreateGradeTable,
  CreateAttendanceTable,
  CreateBehaviorTable,
  CreateNoteTable,
  CreateReferralTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import { fetchStudent, postStudentNotes } from '../../../state/StudentActions';

function StudentDetail(props) {
  const accessLevel = 'all';
  const {
    classes: { header },
    match: { params }
  } = props;
  const {
    classes: { striped, tHead, tRow, tableTitle }
  } = props;
  const { studentId } = params;

  const [loading, setLoading] = useState(true);
  const studentDetail = useSelector(state => state.students.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent({ accessLevel, studentId }));
    setLoading(false);
  }, [dispatch, studentId]);

  if (loading) {
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
    noteSet,
    referralSet
  } = studentDetail;

  const gradeTable = (
    <CreateGradeTable
      header={header}
      tHead={tHead}
      data={gradeSet}
      tRow={tRow}
      striped={striped}
    />
  );

  const attendanceTable = (
    <CreateAttendanceTable
      headerClassStyle={header}
      tHead={tHead}
      data={attendanceSet}
      tRow={tRow}
      striped={striped}
    />
  );

  const behaviorTable = (
    <CreateBehaviorTable
      header={header}
      tHead={tHead}
      data={behaviorSet}
      tRow={tRow}
      striped={striped}
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

  const referralTable = (
    <CreateReferralTable
      header={header}
      tHead={tHead}
      data={referralSet}
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
      <DetailLink k="School" val={school} link={`/school/${schoolId}`} />

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
      />

      <CreateTableHeader
        title="Referral"
        table={referralTable}
        headerClassStyle={tableTitle}
        url={props.location.pathname}
        accessLevel={accessLevel}
        action={postStudentNotes}
        haveReferralButtonBool
      />

      <CreateTableHeader
        title="Note"
        table={noteTable}
        headerClassStyle={tableTitle}
        url={props.location.pathname}
        accessLevel={accessLevel}
        action={postStudentNotes}
        haveNoteButtonBool
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
