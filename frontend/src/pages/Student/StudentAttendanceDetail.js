import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentAttendanceDetail } from 'services/studentServices';

function StudentGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [studentAttendanceDetail, setStudentAttendanceDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentAttendanceDetail().then((s) => {
      setStudentAttendanceDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
        <div>
            <h1>Student Attednance Detail</h1>
            <h2>Loading...</h2>
        </div>
    );
  }
  const {
    studentName,
    
  } = studentAttendanceDetail;

  return (
    <div>
    <Typography
      variant="h4"
      component="h1"
      className={header}
    >{studentName}
    </Typography>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell className={tHead}>Entry Date</TableCell>
                <TableCell className={tHead}>Total Unexcused Absences</TableCell>
                <TableCell className={tHead}>Total Excused Absences</TableCell>
                <TableCell className={tHead}>Total Tardies</TableCell>
                <TableCell className={tHead}>Average Daily Attendance</TableCell>
                <TableCell className={tHead}>Final</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {studentAttendanceDetail.attendanceSet.map((studentAttendanceDetail, i) => {
              const {
                attendanceEntryDate,
                attendanceTermFinalValue,
                totalUnexabs,
                totalExabs,
                totalTardies,
                avgDailyAttendance,
              } = studentAttendanceDetail;
              return (
                  <TableRow
                    key={gradeId}
                    className={`${tRow} ${i % 2 !== 0 ? striped : ''}`}
                  >
                      <TableCell align="left">{attendanceEntryDate}</TableCell>
                      <TableCell align="left">{totalUnexabs}</TableCell>
                      <TableCell align="left">{totalExabs}</TableCell>
                      <TableCell align="left">{totalTardies}</TableCell>
                      <TableCell align="left">{avgDailyAttendance}</TableCell>
                      <TableCell align="left">{attendanceTermFinalValue}</TableCell>
                  </TableRow>
              );
            })}
        </TableBody>
    </Table>
</div>
);
}


const styles = theme => ({
  header: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing.unit * 1,
    textTransform: 'uppercase',
  },
  striped: {
    background: theme.grays.g0,
  },
  tHead: {
    fontSize: 16,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
  },
  tRow: {
    height: 32,
  },
});

StudentAttendanceDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StudentAttendanceDetail);
