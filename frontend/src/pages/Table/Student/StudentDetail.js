import React, { useEffect, useState } from 'react';
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
  CreateBehaviorTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import { fetchStudent } from '../../../state/StudentActions';

function FullStudentDetail(props) {
  const {
    classes: { header }
  } = props;
  const my_or_all = props.my_or_all;
  const my_or_all_url = `/${my_or_all}`;
  const params = props.match;

  const {
    classes: { striped, tHead, tRow, tableTitle }
  } = props;
  const { studentId } = params;

  const [loading, setLoading] = useState(true);
  const studentDetail = useSelector(state => state.students.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent({ accessLevel: my_or_all, studentId }));
    setLoading(false);
  }, [dispatch, my_or_all, studentId]);

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
    behaviorSet
  } = studentDetail;

  const gradeTable = (
    <CreateGradeTable
      header={header}
      tHead={tHead}
      data={gradeSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={my_or_all_url}
    />
  );

  const attendanceTable = (
    <CreateAttendanceTable
      headerClassStyle={header}
      tHead={tHead}
      data={attendanceSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={my_or_all_url}
    />
  );

  const behaviorTable = (
    <CreateBehaviorTable
      header={header}
      tHead={tHead}
      data={behaviorSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={my_or_all_url}
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
      <DetailLink k="School" val={school} link={my_or_all_url + `/school/${schoolId}`} />

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
        haveCreateSaveButtonBool={true}
      />
    </div>
  );
}

FullStudentDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(TablePageStyles)(FullStudentDetail);
