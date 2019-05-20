import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCourses } from 'services/courseServices';
import PropTypes from 'prop-types';

import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';

function Courses(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses().then((s) => {
      setCourses(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
        <div>
            <h1>Courses</h1>
            <h2>Loading...</h2>
        </div>
    );
  }

  return (
      <div>
          <Typography
            variant="h4"
            component="h1"
            className={header}
          >My Students
          </Typography>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell className={tHead}>Course Name</TableCell>
                      <TableCell className={tHead}>School</TableCell>
                      <TableCell className={tHead}>Course Code</TableCell>
                      <TableCell className={tHead}>Course Subject</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {courses.map((student, i) => {
                    const {
                      courseId,
                      courseName,
                      schoolName,
                      schoolId,
                      courseCode,
                      courseSubject,
                    } = Courses;
                    return (
                        <TableRow
                          key={courseId}
                          className={`${tRow} ${i % 2 !== 0 ? striped : ''}`}
                        >
                            <TableCell>
                                <Link to={`/course/${courseId}`}>
                                    <StyledLink>{courseName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link to={`/school/${schoolId}`}>
                                    <StyledLink>{schoolName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell align="right">{courseCode}</TableCell>
                            <TableCell align="right">{courseSubject}</TableCell>
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

Courses.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Courses);
