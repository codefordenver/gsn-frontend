import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';
import Layout from 'components/layouts/Default';
import LoginContainer from 'pages/Login/LoginContainer';
import SignupContainer from 'pages/Register';
import {
  MySchools,
  AllSchools,
  MyCourses,
  AllCourses,
  MyPrograms,
  AllPrograms,
  MySchoolDetail,
  AllSchoolDetail,
  MyCourseDetail,
  AllCourseDetail,
  MyProgramDetail,
  AllProgramDetail,
  MyDistrictDetail,
  AllDistrictDetail
} from 'pages/Table/TablesAndData';

import ViewAllDataHomepage from 'pages/Homepages/ViewAllDataHomepage';
import Students from '../pages/Table/Student/Students';
import StudentDetail from '../pages/Table/Student/StudentDetail';
import Districts from '../pages/Table/District/Districts';
import DistrictDetail from '../pages/Table/District/DistrictDetail';

import PrivateRoute from './PrivateRoute';

const MY_CONST = 'my';
const ALL_CONST = 'all';

export default function() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={SignupContainer} />
        <Switch>
          <Layout>
            <Route exact path="/" render={() => <Students myOrAll={MY_CONST} />} />

            <Route exact path="/my/district" render={(props) => <Districts {...props} myOrAll={MY_CONST}/>} />
            <Route exact path="/all/district" render={(props) => <Districts {...props} myOrAll={ALL_CONST}/>} />
            <Route exact path="/all/district/:districtId" render={(props) => <DistrictDetail {...props} myOrAll={ALL_CONST}/>} />
            <Route exact path="/my/district/:districtId" render={(props) => <DistrictDetail {...props} myOrAll={MY_CONST}/>} />

            <PrivateRoute exact path="/my/school" component={MySchools} />
            <PrivateRoute exact path="/all/school" component={AllSchools} />
            <PrivateRoute exact path="/all/school/:schoolId" component={AllSchoolDetail} />
            <PrivateRoute exact path="/my/school/:schoolId" component={MySchoolDetail} />

            <Route exact path="/my/student" render={(props) => <Students {...props} myOrAll={MY_CONST} />} />
            <Route exact path="/all/student" render={(props) => <Students {...props} myOrAll={ALL_CONST} />} />
            <Route exact path="/my/student/:studentId" render={(props) => <StudentDetail {...props} myOrAll={MY_CONST}/>} />
            <Route exact path="/all/student/:studentId" render={(props) => <StudentDetail {...props} myOrAll={ALL_CONST}/>} />

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
