import React from 'react';

import Students from 'pages/Table/Student/Students';
import Schools from 'pages/Table/School/Schools';
import Districts from 'pages/Table/District/Districts';
import Programs from 'pages/Table/Program/Programs';
import Courses from 'pages/Table/Course/Courses';

import DistrictDetail from 'pages/Table/District/DistrictDetail';
import ProgramDetail from 'pages/Table/Program/ProgramDetail';
import StudentDetail from 'pages/Table/Student/StudentDetail';
import CourseDetail from 'pages/Table/Course/CourseDetail';
import SchoolDetail from 'pages/Table/School/SchoolDetail';

// const my_url = '/my';
// const all_url = '/all';

const MY_CONST = 'my';
const ALL_CONST = 'all';

function MyStudents(props) {
  return <Students my_or_all={MY_CONST} />;
}

function AllStudents(props) {
  return <Students my_or_all={ALL_CONST} />;
}

function MyStudentDetail(props) {
  return <StudentDetail match={props.match.params} my_or_all={MY_CONST} />;
}

function AllStudentDetail(props) {
  return <StudentDetail match={props.match.params} my_or_all={ALL_CONST} />;
}

function MySchools(props) {
  return <Schools my_or_all={MY_CONST} />;
}

function AllSchools(props) {
  return <Schools my_or_all={ALL_CONST} />;
}

function MySchoolDetail(props) {
  return <SchoolDetail match={props.match.params} my_or_all={MY_CONST} />;
}

function AllSchoolDetail(props) {
  return <SchoolDetail match={props.match.params} my_or_all={ALL_CONST} />;
}

function MyCourses(props) {
  return <Courses my_or_all={MY_CONST} />;
}

function AllCourses(props) {
  return <Courses my_or_all={ALL_CONST} />;
}

function MyCourseDetail(props) {
  return <CourseDetail match={props.match.params} my_or_all={MY_CONST} />;
}

function AllCourseDetail(props) {
  return <CourseDetail match={props.match.params} my_or_all={ALL_CONST} />;
}

function MyDistricts(props) {
  return <Districts my_or_all={MY_CONST} />;
}

function AllDistricts(props) {
  return <Districts my_or_all={ALL_CONST} />;
}

function MyDistrictDetail(props) {
  return <DistrictDetail match={props.match.params} my_or_all={MY_CONST} />;
}

function AllDistrictDetail(props) {
  return <DistrictDetail match={props.match.params} my_or_all={ALL_CONST} />;
}

function MyPrograms(props) {
  return <Programs my_or_all={MY_CONST} />;
}

function AllPrograms(props) {
  return <Programs my_or_all={ALL_CONST} />;
}

function MyProgramDetail(props) {
  return <ProgramDetail match={props.match.params} my_or_all={MY_CONST} />;
}

function AllProgramDetail(props) {
  return <ProgramDetail match={props.match.params} my_or_all={ALL_CONST} />;
}

export {
  AllStudents,
  MyStudents,
  MySchools,
  AllSchools,
  MyCourses,
  AllCourses,
  MyPrograms,
  AllPrograms,
  MyDistricts,
  AllDistricts,
  MyStudentDetail,
  AllStudentDetail,
  MySchoolDetail,
  AllSchoolDetail,
  MyCourseDetail,
  AllCourseDetail,
  MyProgramDetail,
  AllProgramDetail,
  MyDistrictDetail,
  AllDistrictDetail
};
