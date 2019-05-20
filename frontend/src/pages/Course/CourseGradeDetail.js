import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getCourseGradeDetail } from 'services/courseServices';

function CourseGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [courseGradeDetail, setCourseGradeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourseGradeDetail().then((s) => {
      setCourseGradeDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
        <div>
            <h1>Course Grade Details</h1>
            <h2>Loading...</h2>
        </div>
    );
  }
  const {
      courseId,
      courseName,
  } = courseGradeDetail;

  return (
    <div>
    <Typography
      variant="h4"
      component="h1"
      className={header}
    >{courseName}
    </Typography>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell className={tHead}>Student Name</TableCell>
                <TableCell className={tHead}>Term</TableCell>
                <TableCell className={tHead}>Grade</TableCell>
                <TableCell className={tHead}>Final</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {courseGradeDetail.gradeSet.map((courseGradeDetail, i) => {
              const {
                  studentId,
                  studentName,
                  courseTerm,
                  gradeId,
                  grade,
                  finalGradeForTerm,
              } = courseGradeDetail;
              return (
                  <TableRow
                    key={gradeId}
                    className={`${tRow} ${i % 2 !== 0 ? striped : ''}`}
                  >
                      <TableCell>
                          <Link to={`/students/${studentId}`}>
                              <StyledLink>{studentName}</StyledLink>
                          </Link>
                      </TableCell>
                      <TableCell align="left">{courseTerm}</TableCell>
                      <TableCell align="left">{grade}</TableCell>
                      <TableCell align="left">{finalGradeForTerm}</TableCell>
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

CourseGradeDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CourseGradeDetail);
