import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';
import Layout from 'components/layouts/Default';
import LoginContainer from 'pages/Login/LoginContainer';
import SignupContainer from 'pages/Register';

import { MyStudents, AllStudents, 
  MySchools, AllSchools,
  MyCourses, AllCourses,
  MyPrograms, AllPrograms,
  MyDistricts, AllDistricts,
  MyStudentDetail, AllStudentDetail, 
  MySchoolDetail, AllSchoolDetail,
  MyCourseDetail, AllCourseDetail,
  MyProgramDetail, AllProgramDetail,
  MyDistrictDetail, AllDistrictDetail } from 'pages/Table/TablesAndData';


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
                      <PrivateRoute exact path="/" component={MyStudents} />

                      <PrivateRoute exact path="/my/district" component={MyDistricts} />
                      <PrivateRoute exact path="/all/district" component={AllDistricts} />
                      <PrivateRoute exact path="/all/district/:districtId" component={AllDistrictDetail} />
                      <PrivateRoute exact path="/my/district/:districtId" component={MyDistrictDetail} />

                      <PrivateRoute exact path="/my/school" component={MySchools} />
                      <PrivateRoute exact path="/all/school" component={AllSchools} />
                      <PrivateRoute exact path="/all/school/:schoolId" component={AllSchoolDetail} />
                      <PrivateRoute exact path="/my/school/:schoolId" component={MySchoolDetail} />
                      
                      <PrivateRoute exact path="/my/student" component={MyStudents} />
                      <PrivateRoute exact path="/all/student" component={AllStudents} />
                      <PrivateRoute exact path="/my/student/:studentId" component={MyStudentDetail} />
                      <PrivateRoute exact path="/all/student/:studentId" component={AllStudentDetail} />

                      <PrivateRoute exact path="/my/program" component={MyPrograms} />
                      <PrivateRoute exact path="/all/program" component={AllPrograms} />
                      <PrivateRoute exact path="/my/program/:programId" component={MyProgramDetail} />
                      <PrivateRoute exact path="/all/program/:programId" component={AllProgramDetail} />

                      <PrivateRoute exact path="/my/course" component={MyCourses} />
                      <PrivateRoute exact path="/all/course" component={AllCourses} />
                      <PrivateRoute exact path="/my/course/:courseId" component={MyCourseDetail} />      
                      <PrivateRoute exact path="/all/course/:courseId" component={AllCourseDetail} /> 


                      <PrivateRoute exact path="/all" component={ViewAllDataHomepage} />
                    

                  </Layout>
              </Switch>
          </Switch>
      </Router>

  );
}
