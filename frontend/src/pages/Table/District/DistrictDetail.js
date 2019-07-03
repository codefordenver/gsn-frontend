import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { DetailItem } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import {
  CreateSchoolTable,
  CreateNoteTable,
  CreateAttendanceTable,
  CreateBehaviorTable,
  CreateStudentTable,
  CreateGradeTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import {
  fetchDistrictDetails,
  postDistrictNotes
} from '../../../state/DistrictActions';

function DistrictDetail(props) {
  const {
    classes: { header, striped, tHead, tRow, tableTitle }
  } = props;

  // Props are provided by React Router
  const { districtId } = props.match.params;

  // Access Level Variables
  const myOrAll = props.myOrAll;
  const myOrAllUrl = `/${myOrAll}`;

  // Redux Hooks
  const dispatch = useDispatch();
  const districtDetail = useSelector(state => {
    return state.districts.district;
  });

  // React Hook to fetch DistrictDetail data
  useEffect(() => {
    dispatch(fetchDistrictDetails({ accessLevel: myOrAll, districtId }));
  }, [dispatch, districtId, myOrAll]);

  if (!districtDetail) {
    return loadingJSX('District Detail');
  }

  const {
    districtName,
    state,
    city,
    code,
    schoolSet,
    noteSet,
    studentSet,
    gradeSet,
    attendanceSet,
    behaviorSet
  } = districtDetail;

  const schoolTable = (
    <CreateSchoolTable
      header={header}
      tHead={tHead}
      data={schoolSet}
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
    />
  );

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
      header={header}
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

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        {districtName}
      </Typography>
      <DetailItem k="Code" val={code} />
      <DetailItem k="City" val={city} />
      <DetailItem k="State" val={state} />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="School"
        table={schoolTable}
      />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Grade"
        table={gradeTable}
      />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Attendance"
        table={attendanceTable}
      />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Student"
        table={studentTable}
      />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Behavior"
        table={behaviorTable}
      />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Note"
        table={noteTable}
        url={props.location.pathname}
        accessLevel={myOrAll}
        action={postDistrictNotes}
        haveCreateSaveButtonBool
      />
    </div>
  );
}

DistrictDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

export default withStyles(TablePageStyles)(DistrictDetail);
