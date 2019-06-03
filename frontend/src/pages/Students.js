import React, { useEffect, useState, useReducer } from 'react';
// useEffect, useState, useReducer
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { fetchStudents } from 'state/StudentActions';
import PropTypes from 'prop-types';

import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';
// import * as Reducer from '../state/studentReducer';
// class Students extends Component {
function Students(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //   };
  // }

  const {
    classes: {
      header, striped, tHead, tRow,
    },
  } = props;

  // const classes = () => {
  //   header, striped, tHead, tRow,
  // } = this.props;


  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [state, dispatch] = useReducer(Reducer.StudentReducer, Reducer.initialState);

  useEffect(() => {
    fetchStudents().then((s) => {
      setStudents(s);
      // setLoading(false);
    });
  }, []);

  // componentDidMount = () => {
  //   this.props.fetchStudents();
  // }

  // const { header, striped, tHead, tRow } = props;

  // render() {
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
// }

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
  // header: PropTypes.element,
  // tHead: PropTypes.element,
  // tRow: PropTypes.element,
  // striped: PropTypes.element,
  // students: PropTypes.object,
  // fetchStudents: PropTypes.func,
};

// const mapStateToProps = state => ({ students: state.students });

export default withStyles(styles)(Students);
// connect(mapStateToProps, { fetchStudents })(withStyles(styles)(Students));
