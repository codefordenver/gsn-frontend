import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getStudentGradeDetail } from 'services/studentServices';

function StudentGradeDetail(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [studentGradeDetail, setStudentGradeDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentGradeDetail().then((s) => {
      setStudentGradeDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
        <div>
            <h1>Students</h1>
            <h2>Loading...</h2>
        </div>
    );
  }
  const {
    name,
    
  } = studentGradeDetail;

  return (
    <div>
    <Typography
      variant="h4"
      component="h1"
      className={header}
    >{name}
    </Typography>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell className={tHead}>Course</TableCell>
                <TableCell className={tHead}>Term</TableCell>
                <TableCell className={tHead}>Grade</TableCell>
                <TableCell className={tHead}>Final</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {studentGradeDetail.gradeSet.map((studentGradeDetail, i) => {
              const {
                gradeId,
                courseName,
                courseId,
                courseTerm,
                grade,
                finalGradeForTerm,
              } = studentGradeDetail;
              return (
                  <TableRow
                    key={gradeId}
                    className={`${tRow} ${i % 2 !== 0 ? striped : ''}`}
                  >
                      <TableCell>
                          <Link to={`/course/${courseId}`}>
                              <StyledLink>{courseName}</StyledLink>
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

StudentGradeDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StudentGradeDetail);
