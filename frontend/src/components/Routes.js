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

import Programs from 'pages/Table/Program/Programs';
import ProgramDetail from 'pages/Table/Program/ProgramDetail';

import Students from 'pages/Table/Student/Students';
import StudentDetail from 'pages/Table/Student/StudentDetail';


import Courses from 'pages/Table/Course/Courses';
import CourseDetail from 'pages/Table/Course/CourseDetail';

import Schools from 'pages/Table/School/Schools';
import SchoolDetail from 'pages/Table/School/SchoolDetail';

import ViewAllDataHomepage from 'pages/Homepages/ViewAllDataHomepage';

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

                      <PrivateRoute exact path="/program" component={Programs} />
                      <PrivateRoute exact path="/program/:programId" component={ProgramDetail} />

                      <PrivateRoute exact path="/student" component={Students} />
                      <PrivateRoute exact path="/student/:studentId" component={StudentDetail} />

                      <PrivateRoute exact path="/course" component={Courses} />
                      <PrivateRoute exact path="/course/:courseId" component={CourseDetail} />

                      <PrivateRoute exact path="/school" component={Schools} />
                      <PrivateRoute exact path="/school/:schoolId" component={SchoolDetail} />

                      <PrivateRoute exact path="/viewalldata" component={ViewAllDataHomepage} />


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
