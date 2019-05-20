import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';
import Layout from 'components/layouts/Default';
// import Nav from 'components/Nav';
import HomePage from 'components/HomePage';
import LoginContainer from 'pages/Login/LoginContainer';
import SignupContainer from 'pages/Register';
import Districts from 'components/Districts';
import Students from 'pages/Student/Students';
import StudentDetail from 'pages/Student/StudentDetail';
import StudentGradeDetail from 'pages/Student/StudentGradeDetail';
import CourseDetail from 'pages/Course/CourseDetail';
import SchoolDetail from 'pages/School/SchoolDetail';
import CourseGradeDetail from 'pages/Course/CourseGradeDetail';
import Courses from 'pages/Course/Courses';

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
                      <PrivateRoute path="/districts" component={Districts} />
                      <PrivateRoute exact path="/students" component={Students} />
                      <PrivateRoute exact path="/students/:studentId" component={StudentDetail} />
                      <PrivateRoute path="/students/grade/:studentId" component={StudentGradeDetail} />
                      <PrivateRoute exact path="/course" component={Courses} />
                      <PrivateRoute exact path="/course/:courseId" component={CourseDetail} />
                      <PrivateRoute exact path="/course/grade/:courseId" component={CourseGradeDetail} />
                      <PrivateRoute exact path="/school/:schoolId" component={SchoolDetail} />

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
