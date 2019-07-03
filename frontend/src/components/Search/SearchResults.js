import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from 'state/StudentActions';
import { fetchDistricts } from 'state/DistrictActions';
import { fetchPrograms } from 'state/ProgramActions';
import { fetchSchools } from 'state/SchoolActions';
import { fetchCourses } from 'state/CourseActions';
import { loadingJSX } from 'components/sharedStyles/LoadingStyles';
import { Typography, withStyles, Link as StyledLink } from '@material-ui/core';
import { TablePageStyles } from 'components/sharedStyles/Table/TablePageStyles';
import { Link } from 'react-router-dom';

function SearchResults(props) {
  const {
    classes: { header }
  } = props;
  const [loading, setLoading] = useState(true);

  const searchTerm = props.searchTerm.toLowerCase();
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  const courses = useSelector(state => state.courses.courses);
  const schools = useSelector(state => state.schools.schools);
  const programs = useSelector(state => state.programs.programs);
  const districts = useSelector(state => state.districts.districts);

  useEffect(() => {
    dispatch(fetchStudents({ accessLevel: 'all' }));
    dispatch(fetchCourses({ accessLevel: 'all' }));
    dispatch(fetchSchools({ accessLevel: 'all' }));
    dispatch(fetchPrograms({ accessLevel: 'all' }));
    dispatch(fetchDistricts({ accessLevel: 'all' }));
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return loadingJSX('Search Results');
  }

  if (searchTerm === '') {
    return null;
  }
  return (
    <>
      <Typography variant="h5" component="h1" className={header}>
        {'Search Results for "' + searchTerm + '":'}
      </Typography>
      {students.map(studentData => {
        if (studentData.studentName.toLowerCase().includes(searchTerm)) {
          return (
            <>
              <Link to={`/all/student/${studentData.studentId}`}>
                <StyledLink>{studentData.studentName}</StyledLink>
              </Link> (Student)
              <br />
            </>
          );
        }
      })}
      {courses.map(courseData => {
        if (
          courseData.courseName.toLowerCase().includes(searchTerm) ||
          courseData.courseCode.toLowerCase().includes(searchTerm)
        ) {
          return (
            <>
              <Link to={`/all/course/${courseData.courseId}`}>
                <StyledLink>
                  {courseData.courseName + " - " + courseData.courseCode}
                </StyledLink>
              </Link> (Course)
              <br />
            </>
          );
        }
      })}
      {districts.map(districtData => {
        if (districtData.districtName.toLowerCase().includes(searchTerm)) {
          return (
            <>
              <Link to={`/all/district/${districtData.districtId}`}>
                <StyledLink>{districtData.districtName}</StyledLink>
              </Link> (District)
              <br />
            </>
          );
        }
      })}
      {schools.map(schoolData => {
        if (schoolData.schoolName.toLowerCase().includes(searchTerm)) {
          return (
            <>
              <Link to={`/all/school/${schoolData.schoolId}`}>
                <StyledLink>{schoolData.schoolName}</StyledLink>
              </Link> (School)
              <br />
            </>
          );
        }
      })}
      {programs.map(programData => {
        if (programData.programName.toLowerCase().includes(searchTerm)) {
          return (
            <>
              <Link to={`/all/program/${programData.programId}`}>
                <StyledLink>{programData.programName}</StyledLink>
              </Link> (Program)
              <br />
            </>
          );
        }
      })}
    </>
  );
}

SearchResults.propTypes = {
  classes: PropTypes.object,
  searchTerm: PropTypes.object
};

export default withStyles(TablePageStyles)(SearchResults);
