import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from 'state/StudentActions';
import PropTypes from 'prop-types';

import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';

function Students(props) {
  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents().then((s) => {
      setStudents(s);
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
                      <TableCell className={tHead}>Name</TableCell>
                      <TableCell className={tHead}>School</TableCell>
                      <TableCell className={tHead} align="right">Birthdate</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {students.map((student, i) => {
                    const {
                      studentId, name, school, schoolId, birthdate,
                    } = student;
                    return (
                        <TableRow
                          key={studentId}
                          className={`${tRow} ${i % 2 !== 0 ? striped : ''}`}
                        >
                            <TableCell>
                                <Link to={`/students/${studentId}`}>
                                    <StyledLink>{name}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link to={`/schools/${schoolId}`}>
                                    <StyledLink>{school}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell align="right">{birthdate}</TableCell>
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

Students.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Students);
connect(null, { fetchStudents })(Students);
