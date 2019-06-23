import React from 'react';
import {  useSelector } from 'react-redux';
import { fetchStudents, fetchSchools } from 'state/StudentActions';

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

const my_url = "/my";
const all_url = "/all";

const my_const = "my";
const all_const = "all";

function MyStudents(props) {
    return(
        <Students my_or_all={ my_const } />
    );
}

function AllStudents(props) {
    return(
        <Students my_or_all={ all_const } />
    );
}

function MyStudentDetail(props) {
    return(
        <StudentDetail 
            match={props.match.params}
            my_or_all={my_const} />
    );
}

function AllStudentDetail(props) {
    return(
        <StudentDetail 
            match={props.match.params}
            my_or_all={all_const} />
    );
}

function MySchools(props) {
    return(
        <Schools my_or_all={ my_const }  />
    );
}

function AllSchools(props) {
    return(
        <Schools my_or_all={ all_const } />
    );
}

function MySchoolDetail(props) {
    return(
        <SchoolDetail  
            match={props.match.params}
            my_or_all={my_const}/>
    );
}

function AllSchoolDetail(props) {
    return(
        <SchoolDetail 
            match={props.match.params}
            my_or_all={all_const} />
    );
}

function MyCourses(props) {
    return(
        <Courses my_or_all={ my_const } />
    );
}

function AllCourses(props) {
    return(
        <Courses my_or_all={ all_const } />
    );
}

function MyCourseDetail(props) {
    return(
        <CourseDetail  
            match={props.match.params}
            my_or_all={my_const} />
    );
}

function AllCourseDetail(props) {
    return(
        <CourseDetail 
            match={props.match.params}
            my_or_all={all_const} />
    );
}

function MyDistricts(props) {
    return(
        <Districts my_or_all={ my_const } />
    );
}

function AllDistricts(props) {
    return(
        <Districts my_or_all={ all_const } />
    );
}

function MyDistrictDetail(props) {
    return(
        <DistrictDetail  
            match={props.match.params}
            my_or_all={my_const} />
    );
}

function AllDistrictDetail(props) {
    return(
        <DistrictDetail  
            match={props.match.params}
            my_or_all={all_const} />
    );
}

function MyPrograms(props) {
    return(
        <Programs my_or_all={ my_const } />
    );
}

function AllPrograms(props) {
    return(
        <Programs my_or_all={ all_const } />
    );
}

function MyProgramDetail(props) {
    return(
        <ProgramDetail  
            match={props.match.params}
            my_or_all={my_const} />
    );
}

function AllProgramDetail(props) {
    return(
        <ProgramDetail  
            match={props.match.params}
            my_or_all={all_const} />
    );
}

export {  AllStudents, MyStudents,
    MySchools, AllSchools,
    MyCourses, AllCourses,
    MyPrograms, AllPrograms,
    MyDistricts, AllDistricts,
    MyStudentDetail, AllStudentDetail, 
    MySchoolDetail, AllSchoolDetail,
    MyCourseDetail, AllCourseDetail,
    MyProgramDetail, AllProgramDetail,
    MyDistrictDetail, AllDistrictDetail };