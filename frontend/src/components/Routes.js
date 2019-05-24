import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';
import Layout from 'components/layouts/Default';
// import Nav from 'components/Nav';
import HomePage from 'components/HomePage';
import LoginContainer from 'pages/Login/LoginContainer';
import SignupContainer from 'pages/Register';

import Districts from 'pages/Table/District/Districts';
import DistrictDetail from 'pages/Table/District/DistrictDetail';
import DistrictStudentDetail from 'pages/Table/District/DistrictStudentDetail';
import DistrictSchoolDetail from 'pages/Table/District/DistrictSchoolDetail';
import DistrictGradeDetail from 'pages/Table/District/DistrictGradeDetail';
import DistrictCourseDetail from 'pages/Table/District/DistrictCourseDetail';
import DistrictAttendanceDetail from 'pages/Table/District/DistrictAttendanceDetail';

import Programs from 'pages/Table/Program/Programs';
import ProgramDetail from 'pages/Table/Program/ProgramDetail';
import ProgramStudentDetail from 'pages/Table/Program/ProgramStudentDetail';
import ProgramGradeDetail from 'pages/Table/Program/ProgramGradeDetail';

import Students from 'pages/Table/Student/Students';
import StudentDetail from 'pages/Table/Student/StudentDetail';
import StudentGradeDetail from 'pages/Table/Student/StudentGradeDetail';
import StudentAttendanceDetail from 'pages/Table/Student/StudentAttendanceDetail';

import Courses from 'pages/Table/Course/Courses';
import CourseDetail from 'pages/Table/Course/CourseDetail';
import CourseGradeDetail from 'pages/Table/Course/CourseGradeDetail';
import CourseStudentDetail from 'pages/Table/Course/CourseStudentDetail';
import CourseAttendanceDetail from 'pages/Table/Course/CourseAttendanceDetail';

import Schools from 'pages/Table/School/Schools';
import SchoolDetail from 'pages/Table/School/SchoolDetail';
import SchoolStudentDetail from 'pages/Table/School/SchoolStudentDetail';
import SchoolGradeDetail from 'pages/Table/School/SchoolGradeDetail';
import SchoolCourseDetail from 'pages/Table/School/SchoolCourseDetail';
import SchoolAttendanceDetail from 'pages/Table/School/SchoolAttendanceDetail';


import PrivateRoute from './PrivateRoute';
// username: user.get('username'),
// loading: user.get('loading'),


export default function () {
  return (
      <Router history={history}>
          <Switch>
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/register" component={SignupContainer} />
              <Switch>
                  <Layout>
                      <PrivateRoute exact path="/" component={HomePage} />

                      <PrivateRoute exact path="/district" component={Districts} />
                      <PrivateRoute exact path="/district/:districtId" component={DistrictDetail} />
                      <PrivateRoute exact path="/district/student/:districtId" component={DistrictStudentDetail} />
                      <PrivateRoute exact path="/district/school/:districtId" component={DistrictSchoolDetail} />
                      <PrivateRoute exact path="/district/grade/:districtId" component={DistrictGradeDetail} />
                      <PrivateRoute exact path="/district/course/:districtId" component={DistrictCourseDetail} />
                      <PrivateRoute exact path="/district/attendance/:districtId" component={DistrictAttendanceDetail} />



                      <PrivateRoute exact path="/program" component={Programs} />
                      <PrivateRoute exact path="/program/:programId" component={ProgramDetail} />
                      <PrivateRoute exact path="/program/student/:programId" component={ProgramStudentDetail} />
                      <PrivateRoute exact path="/program/grade/:programId" component={ProgramGradeDetail} />



                      <PrivateRoute exact path="/students" component={Students} />
                      <PrivateRoute exact path="/students/:studentId" component={StudentDetail} />
                      <PrivateRoute path="/students/grade/:studentId" component={StudentGradeDetail} />
                      <PrivateRoute path="/students/attendance/:studentId" component={StudentAttendanceDetail} />


                      <PrivateRoute exact path="/course" component={Courses} />
                      <PrivateRoute exact path="/course/:courseId" component={CourseDetail} />
                      <PrivateRoute exact path="/course/grade/:courseId" component={CourseGradeDetail} />
                      <PrivateRoute exact path="/course/student/:courseId" component={CourseStudentDetail} />
                      <PrivateRoute exact path="/course/attendance/:courseId" component={CourseAttendanceDetail} />
                      

                      <PrivateRoute exact path="/school" component={Schools} />
                      <PrivateRoute exact path="/school/:schoolId" component={SchoolDetail} />
                      <PrivateRoute exact path="/school/student/:schoolId" component={SchoolStudentDetail} />
                      <PrivateRoute exact path="/school/grade/:schoolId" component={SchoolGradeDetail} />
                      <PrivateRoute exact path="/school/attendance/:schoolId" component={SchoolAttendanceDetail} />
                      <PrivateRoute exact path="/school/course/:schoolId" component={SchoolCourseDetail} />


                  </Layout>
              </Switch>
          </Switch>
      </Router>

  );
}

/* <div>
              {isLoggedIn && <Nav navItems={navItems} />} */
/*
        <h3>
            {isLoggedIn && (
            <p>
              Hello {username}
            </p>
            )}
        </h3> */
