import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { DetailLink } from 'components/sharedStyles/Table/DetailStyles';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import {
  CreateGradeTable,
  CreateAttendanceTable,
  CreateStudentTable,
  CreateCourseTable,
  CreateBehaviorTable
} from 'components/sharedStyles/Table/CreateTablesStyle';
import CreateTableHeader from 'components/sharedStyles/Table/TableHeader';
import { fetchSchoolDetails } from '../../../state/SchoolActions';

function FullSchoolDetail(props) {
  const {
    classes: { header, striped, tHead, tRow, tableTitle }
  } = props;
  const params = props.match;
  const { schoolId } = params;
  const my_or_all = props.my_or_all;
  const my_or_all_url = `/${my_or_all}`;
  const dispatch = useDispatch();

  const schoolDetail = useSelector(state => {
    return state.schools.school;
  });

  useEffect(() => {
    dispatch(fetchSchoolDetails({ accessLevel: my_or_all, schoolId }));
  }, [dispatch, my_or_all, schoolId]);

  if (!schoolDetail) {
    return loadingJSX('School Detail');
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
      header={header}
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

  const courseTable = (
    <CreateCourseTable
      header={header}
      tHead={tHead}
      data={courseSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={my_or_all_url}
    />
  );

  const studentTable = (
    <CreateStudentTable
      header={header}
      tHead={tHead}
      data={studentSet}
      tRow={tRow}
      striped={striped}
      my_or_all_link={my_or_all_url}
    />
  );

  return (
    <div>
      <Typography className={header} component="h1" variant="h4">
        {schoolName}
      </Typography>
      <DetailLink
        k="District Name"
        val={districtName}
        link={my_or_all_url + `/district/${districtId}`}
      />

      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Grades"
        table={gradeTable}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Attendance"
        table={attendanceTable}
      />
      <CreateTableHeader
        headerClassStyle={tableTitle}
        title="Behavior"
        table={behaviorTable}
        haveCreateSaveButtonBool={true}
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

FullSchoolDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(TablePageStyles)(FullSchoolDetail);
